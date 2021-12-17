import React, { Fragment, Component } from 'react';
import Navbar from './components/layouts/navbar/Navbar';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Users from './components/users/Users';
import Searchbar from './components/common/searchbar';
import Alert from './components/common/alert';
import About from './pages/About';

import './App.css';

class App extends Component {

  state = {
    users:[],
    loading: false,
    alert: null,
    user: {}
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({ loading: true });
  
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID},&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res.data);
  //   // Set the state and loading
  //   this.setState({ users: res.data, loading: false })
  // }

  // search github users
  searchUsers = async text => {
   
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID},&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false })
  }

  // clear users from search
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  //setAlert 
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type }})
    setTimeout(() => {
      this.setState({ alert: null})
    }, 3000);
  }

  getUser = async (username) => {
    this.setState({ loading: false });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID},&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false})
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
          <div>
            <Navbar title='Github Finder' icon="fab fa-github" />
            <div className="container my-5">
                <Alert alert={this.state.alert} />
                <Routes>
                  <Route exact path="/" element={
                    
                      <Fragment>
                          <div className="row">
                              <Searchbar 
                              searchUsers={this.searchUsers} 
                              clearUsers={this.clearUsers} 
                              showClear={users.length > 0 ? true : false}
                                setAlert={this.setAlert}
                              />
                          </div>
                          <div className="row">

                              <Users loading={loading} users={users} />
                          </div>
                      </Fragment>
                    
                  }/>
                  <Route exact path='/about' element={<About/>} />
                  {/* <Route exact path='/user/:login' 
                         element={<User getUser={this.getUser} user={user} loading={loading} />} /> */}
                
                </Routes>
                

            </div>
          </div>

      </Router>
    )
  }
}
export default App;
