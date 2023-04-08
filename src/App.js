import { createContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Errorpage from "./components/pages/Errorpage";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


import "./components/stylesheets/auth.css";
import "./components/stylesheets/layout.css";

import ReduxA from "./components/pages/redux/ReduxA";
import ReduxB from "./components/pages/redux/ReduxB";
import ReduxC from "./components/pages/redux/ReduxC";
import { Provider } from "react-redux";
import { store } from "./store";
import UserList from "./components/pages/redux/users/UserList2";
import AddUser from "./components/pages/redux/users/AddUser";
import EditUser from "./components/pages/redux/users/EditUser";
import ViewUser from "./components/pages/redux/users/ViewUser";
import TodoPage from "./components/pages/redux/todo2/TodoPage";


// import { initialState, reducer } from "./components/pages/auth/UseReducer";


// 1: contextAPI
export const LoginContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)  
  const [loggedIn, setLoggedIn] = useState(localStorage.token ? true : false);

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.removeItem('token')
    }
  }
  useEffect(() => {
    console.log(loggedIn)
    const loggeduser = JSON.parse(localStorage.getItem("token"))

    if (loggeduser) {
      // console.log(loggedIn)
      setLoggedIn(true); console.log('logged In frm App...')
    }
  }, [loggedIn])

  return (
    <LoginContext.Provider value={{ loggedIn, changeLoggedIn }}>
      <Provider store={store}>
        <Router>
          <>
            <Navbar />
            <div className="main">
              <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" exact element={<Contact />} />

                <Route path="/reduxa" exact element={<ReduxA />} />
                <Route path="/reduxb" exact element={<ReduxB />} />
                <Route path="/reduxc" exact element={<TodoPage />} />

                <Route path="/userlist" element={<UserList />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/userlist/edit-user/:id" element={<EditUser />} />
                <Route path="/userlist/view-user/:id" element={<ViewUser />} />

                <Route path="*" element={<Errorpage />} />
              </Routes>
            </div>
            <Footer />
          </>
        </Router>
      </Provider>
    </LoginContext.Provider>
  );
}

export default App;