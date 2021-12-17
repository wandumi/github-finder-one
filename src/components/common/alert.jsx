import React from 'react'

const alertDanger = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`} role="alert">
                <i className='fas fa-info-circle' > {alert.msg }</i>
            </div>
        )
    )
}

export default alertDanger