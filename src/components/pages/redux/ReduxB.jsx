import React from 'react'
import Header from './Header'
import MailList from './MailList'
import { useDispatch, useSelector } from "react-redux";

const ReduxB = () => {
    const username = useSelector((state) => state.user.value.username);
    return (
        <div className='container'>
            <Header />
            <div className='ritem'>
                <h1>Redux B</h1>
                <h2>{username}</h2>
            </div>
            <MailList />

        </div>
    )
}

export default ReduxB