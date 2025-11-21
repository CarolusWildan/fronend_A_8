import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel, Button, Alert } from "react-bootstrap";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Untuk ikon mata

const FormRegister = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({nama: "", email: "", password: "", role: ""});
    const [showPassword, setShowPassword] = useState(false); // State untuk toggle password visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.nama === "" || user.email === "" || user.password === "" || user.role === "") {
            toast.error("Email dan Password Tidak Boleh Kosong!");
            return;
        } else if (user.nama !== "Ezra" || user.email !== "Ezra12@gmail.com" || user.password !== "12695" || user.password.length !== 5 || user.role !== "Admin" || user.role !== "User" ) {
            toast.error("Nama, Email, Password harus 5 digit dan Role harus sesuai ");
            return;
        } else {
            const newUser = {
                ...user,
                loginAt: new Date(),
            };
            localStorage.setItem("user", JSON.stringify(newUser));
            toast.success("Register berhasil!");
            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev); // Ubah status visibility
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "700px", margin: "auto" }}>
            <Alert variant="info">
                <strong>Info!</strong> Nama, Email , Password, dan Role harus Valid
            </Alert>
            <FloatingLabel controlId="floatingInput" label="Nama" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    name="nama"
                    onChange={handleChange}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleChange}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" style={{ position: "relative" }}>
                <Form.Control
                    type={showPassword ? "text" : "password"} 
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span
                    onClick={togglePasswordVisibility}
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#6c757d",
                    }}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Role" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    name="role"
                    onChange={handleChange}
                />
            </FloatingLabel>
            <Button variant="primary" type="submit" className="mt-3 w-100">
                Register
            </Button>
        </form>
    );
};

export default FormRegister;
