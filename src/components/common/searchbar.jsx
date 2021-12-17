import React, { Component } from 'react'
import PropTypes from "prop-types"

class searchbar extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something', 'red')
        } else {

            this.props.searchUsers(this.state.text)
            this.setState({ text:'' });
        }
        
    }

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div className='mb-5'>
                <form className="mb-2" onSubmit={this.onSubmit}>
                    <input class="form-control mb-2" type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        name='text'
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <div class="d-grid">
                        <button class="btn btn-success" type="submit">Search</button>

                    </div>
                </form>
                {showClear && 
                    <div class="d-grid gap-2">
                        <button class="btn btn-danger" onClick={clearUsers}>Clear</button>
                    </div>
                }
            </div>
        )
    }
}

export default searchbar