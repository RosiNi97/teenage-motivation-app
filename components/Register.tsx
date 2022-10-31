import Link from "next/link";
import { useState } from "react"

export default function Register() {

    const [childNumber, setChildNumber] = useState(0);

    return (
        <form className="form">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text-sm" className="form-control form-control-sm mb-3" />
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control form-control-sm mb-3" />
            </div>

            <div className="auth-buttons">
                <button className="btn btn-primary mt-5" type="button">Register</button>
                <Link className="m" href='/login'>Sing in</Link>
            </div>
        </form>
    )
}