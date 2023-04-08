import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import userImg from "../../../assets/lion.png"
import { deleteUser } from "./userSlice";



// import Spinner from "../layout/Spinner";

const UserList2 = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    // const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    // console.log(users);
    const handleRemoveUser = (id) => {
        dispatch(deleteUser({ id }));
    }

    // Read  from firebase
    // useEffect(() => {
    //     const q = query(collection(db, 'users'));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         let usersArr = [];
    //         querySnapshot.forEach((doc) => {
    //             usersArr.push({ ...doc.data(), id: doc.id });
    //         });
    //         setUsers(usersArr);
    //     });
    //     return () => unsubscribe();
    // }, []);


    return (
        <div className="container my-3">

            <section className="contact-search ">
                <div className="container">
                    <div className="grid">
                        <div className="row text-center">
                            <div className="col">
                                <p className="h1 fw-bold text-primary" >
                                    User Manager
                                </p>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quidem voluptas officia officiis vero quibusdam ab maiores,
                                    quasi tenetur corporis sapiente veniam, ipsa expedita alias
                                    amet unde eum quas laboriosam voluptate provident.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                // loading ? <Spinner /> :
                <>
                    <div className="container">
                        <div className="card">
                            <div className="card-title mt-2">
                                <h2>Users Data</h2>
                            </div>
                            <div className="card-body">
                                <div className="divbtn">
                                    <Link to={`/add-user`} className="btn btn-danger mb-2">Add New  <i className="fa fa-plus-circle me-1" /></Link>
                                </div>

                                <table className="table table-bordered">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <td>ID</td>
                                            <td>Photo</td>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {users &&
                                            users.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    {/* <td>{item.id}</td> */}
                                                    <td><img src={item.photo} alt="img" className="user-img" /></td>
                                                    {/* <td>{item.fname + " " + item.lname}</td> */}
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>
                                                        <button onClick={(e) => navigate(`view-user/${item.id}`)} className="btn btn-primary mx-1" title="View The Data"> <i className="fa fa-eye" /></button>
                                                        <button onClick={(e) => navigate(`edit-user/${item.id}`)} className="btn btn-success mx-1" title="Edit The Data"> <i className="fa fa-pen" /></button>
                                                        <button onClick={(e) => handleRemoveUser(item.id)} className="btn btn-danger mx-1" title="Delete The Data"> <i className="fa fa-trash" /></button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default UserList2;