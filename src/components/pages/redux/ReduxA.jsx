import React, { useState } from 'react'
import Header from './Header'
import MailList from './MailList'
import { login, logout } from "./userSliceA";
import { useDispatch, useSelector } from "react-redux";


const ReduxA = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);
    return (
        <div className='container'>
            <Header />
            <div className='ritem'>
                <h1>Redux A</h1>
                <h2>
                    <input
                        onChange={(e) => {
                            setNewUsername(e.target.value);
                        }}
                    />
                    <button onClick={() => dispatch(login({ username: newUsername }))}>
                        Submit Login
                    </button>
                    <button onClick={() => dispatch(logout())}> Logout </button>
                    <br />
                    <hr />
                    {username ? `Wellcome ${username} ` : " "}
                </h2>

            </div>
            <MailList />

        </div>
    )
}

export default ReduxA
