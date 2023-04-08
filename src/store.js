import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/pages/redux/users/userSlice';
import userReducer from './components/pages/redux/userSliceA';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        user: userReducer
    },
})