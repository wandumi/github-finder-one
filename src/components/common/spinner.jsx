import React from 'react'

const spinner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default spinner;