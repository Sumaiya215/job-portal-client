import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import logo from '../../assets/logo.png'

const Navbar = () => {
    const { user , signOutUser } = useContext(AuthContext)

    const handleSignOut = () =>{
        signOutUser()
        .then(() =>{
            console.log('successful sign out')
        })
        .catch(error =>{
            console.log('failed to sign out');
        })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/myApplications'>My Applications</NavLink></li>
        <li><NavLink to='/addJob'>Add a Job</NavLink></li>
        <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
    </>
    
    return (
        <div className="mb-6">
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                        <h3 className="text-2xl">Job Portal</h3>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleSignOut} className="btn">Log Out</button>
                        </> :
                         <>
                                <Link to="/register">Register</Link>
                                <Link to="/signin">
                                    <button className="btn">Sign In</button>
                                </Link>
                        </>
                    }
                    {/* <Link to="/register">Register</Link>
                    <Link to="/signin">
                        <button className="btn">Sign In</button>
                    </Link> */}

                </div>
            </div>

        </div>
    );
};

export default Navbar;