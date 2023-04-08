// import {
//     faBed,
//     faCalendarDays,
//     faCar,
//     faPerson,
//     faPlane,
//     faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";



import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <div className="header">
            <div className="headerContainer" >

                <div className="headerList">
                    <div className={location.pathname === "/reduxa" ? "headerListItem active" : "headerListItem"} onClick={() => { navigate("/reduxa") }}>
                        {/* <FontAwesomeIcon icon={faBed} /> */}
                        <span>ReduxA</span>
                    </div>
                    <div className={location.pathname === "/reduxb" ? "headerListItem active" : "headerListItem"} onClick={() => { navigate("/reduxb") }}>
                        {/* <FontAwesomeIcon icon={faBed} /> */}
                        <span>ReduxB</span>
                    </div>
                    <div className={location.pathname === "/reduxc" ? "headerListItem active" : "headerListItem"} onClick={() => { navigate("/reduxc") }}>
                        {/* <FontAwesomeIcon icon={faTaxi} /> */}
                        <span>Todo App</span>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Header;
