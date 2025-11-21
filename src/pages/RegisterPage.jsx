import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import FormRegister from "../components/FormRegister";

const RegisterPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <Container className="mt-5">
            <h1 className="text-center display-4">
                <strong>Tixify</strong>
            </h1>
            <p className="text-center lead">Kalau anda belum mempunyai akun, silakan isi form berikut:</p>
            <hr className="featurette-divider" />
            <FormRegister />
        </Container>
    );
};

export default RegisterPage;