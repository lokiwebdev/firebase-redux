import React from 'react'
import Header from './Header'
import MailList from './MailList'

const ReduxC = () => {
    return (
        <div className='container'>
            <Header />
            <div className='ritem'>
                <h1>Redux C</h1>
            </div>
            <MailList />

        </div>
    )
}

export default ReduxC