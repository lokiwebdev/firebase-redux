import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

// import { editUser } from "./userSlice"

const ViewUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);

    const navigate = useNavigate();

    const existingUser = users.filter(user => user.id === params.id);
    const { name, photo, phone, email, fathern, address, gender, dob, country } = existingUser[0];
    // const [values, setValues] = useState({
    //     name,
    //     phone,
    //     email
    // });
    return (
        <div className="my-5 container">
            <section className="container ">
                <div className="col">
                    <p className="h1 fw-bold text-primary" >
                        View User Page
                    </p>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem voluptas officia officiis vero quibusdam ab maiores,
                        quasi tenetur corporis sapiente veniam, ipsa expedita alias
                        amet unde eum quas laboriosam voluptate provident.
                    </p>
                </div>
            </section>


            <section className="container ">
                <div className="row">

                    <form className="form col-md-6 m-2 ">
                        <h1 style={{ fontSize: 30 }}> {name}</h1>
                        <p style={{ fontSize: 20 }}> Your Details </p>

                        <div className="mb-1">
                            <label htmlFor="name" className="px-3 h5">
                                Name:
                            </label>
                            <label htmlFor="name" className="px-3 h5">
                                {name}
                            </label>
                        </div>

                        {/* <div className="mb-1">
                        <label className="px-3 h5">Photo:</label>
                        <label className="px-3 h5">{photo}</label>
                    </div> */}
                        <div className="mb-1">
                            <label className="px-3 h5">Phone:</label>
                            <label className="px-3 h5">{phone}</label>
                        </div>
                        <div className="mb-1">
                            <label className="px-3 h5">Email:</label>
                            <label className="px-3 h5">{email}</label>
                        </div>
                        <div className="mb-1">
                            <label className="px-3 h5">F Name:</label>
                            <label className="px-3 h5">{fathern}</label>
                        </div>
                        <div className="mb-1">
                            <label className="px-3 h5">Address:</label>
                            <label className="px-3 h5">{address}</label>
                        </div>
                        <div className="mb-1">
                            <label className="px-3 h5">Gender:</label>
                            <label className="px-3 h5">{gender}</label>
                        </div>
                        <div className="mb-1">
                            <label className="px-3 h5">DOB:</label>
                            <label className="px-3 h5">{dob}</label>
                        </div>
                        <div className="mb-1">
                            <label className="px-3 h5">Country:</label>
                            <label className="px-3 h5">{country}</label>
                        </div>

                        <button className="btnA my-4" onClick={(e) => navigate(`/userlist`)}  >
                            Back
                        </button>
                    </form>
                    <div className="col">
                        <img src={photo} alt="Image" className="view-img" />
                    </div>

                </div>
            </section>

        </div>
    )
}

export default ViewUser