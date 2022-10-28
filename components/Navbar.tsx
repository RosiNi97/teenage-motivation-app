import { NextPage } from "next";

import Link from "next/link";
import { useRouter } from "next/router";

import { useContext } from "react";
import { UserContext } from "../context/userContext";


const Navbar: NextPage = () => {

    const { user } = useContext(UserContext);
    const router = useRouter();
    console.log(user);

    const handleUserSingOut = (e: any) => {
        e.preventDefault();

        user.userSingOut()
            .then((res: any) => {
                console.log(res);
                console.log('logout');


            }).catch((err: any) => {
                console.log(err);

            })
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className="li p-0 m-2 text-white">
                        <Link href='/'>Home</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="navbar-nav">
                    {
                        user
                            ? <ul className="navbar-nav">
                                <li className="p-0 m-2 text-white">
                                    {/* <Link onClick={handleUserSingOut} href='#'>Logout</Link> */}
                                    <button className="btn btn-primary" onClick={handleUserSingOut}>Logout</button>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav">
                                <li className="p-0 m-2 text-white">
                                    <Link href='/register'>Register</Link>
                                </li>
                                <li className="p-0 m-2 text-white">
                                    <Link href='/login'>Login</Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;