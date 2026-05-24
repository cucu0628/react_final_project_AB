import { useRef } from "react";
import { useAuth } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
    const username = useRef()
    const password = useRef()
    const { login } = useAuth();
    const navigate = useNavigate()
    const submit = async () => {
        if (username.current.value != "") {
            try {
                const resp = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username.current.value,
                        password: password.current.value
                    })
                })
                if (resp.ok) {
                    const data = await resp.json();
                    localStorage.setItem("token", data.token);
                    login();
 
                    navigate('/admin');
                    Swal.fire({
                        theme: "dark",
                        icon: "success",
                        title: "Good",
                        text: "Sikeres Bejelentkezés",
                    });
                } else {
                    console.error('Sikertelen bejelentkezés');
                    Swal.fire({
                        theme: "dark",
                        icon: "error",
                        title: "Oops...",
                        text: "Sikertelen Bejelentkezés",
                    });
                }

            } catch (err) {
                console.error('Error:', err);
                Swal.fire({
                    theme: "dark",
                        icon: "error",
                        title: "Oops...",
                        text: "Sikertelen Bejelentkezés",
                    });
            }
        }
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <form className="mx-auto p-4" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" ref={username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" ref={password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}
export default Login;