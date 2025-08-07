import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleSignout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut Success!",
          icon: "success",
          draggable: true,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-600 text-white font-bold px-4 py-2 rounded"
            : "text-gray-600 hover:text-blue-600 px-4 py-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/myApplications"
        className={({ isActive }) =>
          isActive
            ? "bg-blue-600 text-white font-bold px-4 py-2 rounded"
            : "text-gray-600 hover:text-blue-600 px-4 py-2"
        }
      >
        MyApplications
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">jobBox</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Profile Image */}
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
                title={user.displayName}
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                ?
              </div>
            )}

            {/* Logout Button */}
            <button onClick={handleSignout} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <NavLink to="/register" className="btn">
              Register
            </NavLink>
            <NavLink to="/signIn" className="btn">
              signIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
