import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, photo, phone, email, fathern, address, gender, dob, country } = existingUser[0];
  const [values, setValues] = useState({
    name,
    photo,
    phone,
    email,
    fathern,
    address,
    gender,
    dob,
    country
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleEditUser = () => {
    // setValues({ name, phone: '', email: '' });
    setValues({ name: '', photo: '', phone: '', email: '', fathern: '', address: '', gender: '', country: '', });
    dispatch(editUser({

      id: params.id,
      name: values.name,
      photo: values.photo,
      phone: values.phone,
      email: values.email,
      fathern: values.fathern,
      address: values.address,
      gender: values.gender,
      dob: values.dob,
      country: values.country,
    }));
    navigate('/userlist');
  }

  return (
    <div className="my-5 container">

      <section className="container ">
        <div className="col">
          <p className="h1 fw-bold text-primary" >
            Edit User Page
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

          <form className="form col-md-6 m-2 " onSubmit={handleEditUser}>
            <h1 style={{ fontSize: 30 }}>{name}</h1>
            <p style={{ fontSize: 20 }}>Edit Your Details </p>

            <div className="mb-1">
              <label htmlFor="name" className="px-3 h5">
                Name*:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-1 ">
              <label className="px-3 h5">Photo:</label>
              <input
                type="text"
                name="photo"
                value={values.photo}
                onChange={handleChange}
                placeholder="Your photo's url"
              />
            </div>
            <div className="mb-1">
              <label className="px-3 h5">Phone:</label>
              <input
                type="number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Your mobile number"
              />
            </div>

            <div className="mb-1">
              <label className="px-3 h5">Email*:</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-1">
              <label className="px-3 h5">F Name:</label>
              <input
                type="text"
                name="fathern"
                value={values.fathern}
                onChange={handleChange}
                placeholder="Enter Your Father's Name"
                required
              />
            </div>
            <div className="my-3">
              <label className="px-1 h5">Address*</label>
              <textarea
                rows="3"
                name="address"
                value={values.address}
                onChange={handleChange}
                placeholder="Enter Your Address Here"
                required
              />
            </div>
            <div className="gender-selector py-2 mb-1">
              <label className="px-4 h5"> Gender*:</label>
              <div className="gender-selector ">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={handleChange}
                /> Male
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={handleChange}
                /> Female
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={values.gender === "other"}
                  onChange={handleChange}
                /> Other
              </div>
            </div>
            <div className="mb-1 ">
              <label className="px-3 h5">D.O.B*:</label>
              <input
                type='date'
                placeholder='Enter BirthDate'
                value={values.dob}
                onChange={handleChange}
                name='dob'
                required
              />
            </div>
            <div className="mt-4 ">
              <label className="px-3 h5">Country*:</label>
              <select value={values.country} onChange={handleChange}>
                <option value="">Select a Country</option>
                <option value="India">India</option>
                <option value="USA">U.S.A</option>
                <option value="UK">U.K</option>
                <option value="China">China</option>
              </select>
            </div>

            <button className="btnA my-4 mx-2" type="submit">
              Edit
            </button>
            <button className="btnA my-4 mx-2" onClick={(e) => navigate(`/userlist`)}  >
              Back
            </button>
          </form>
          <div className="col">
            <img src={values.photo} alt="Image" className="view-img" />
          </div>

        </div>
      </section>

    </div>
  )
}

export default EditUser