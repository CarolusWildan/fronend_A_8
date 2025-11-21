import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import imgFeaturette1 from "../assets/images/featurette-1.jpg";
import imgFeaturette2 from "../assets/images/featurette-2.jpg";
import imgBakery1 from "../assets/images/bakery1.jpeg";
import imgBakery2 from "../assets/images/bakery2.jpeg";
import imgBakery3 from "../assets/images/bakery3.jpeg";

const images = [
    {
        img: imgBakery1,
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        img: imgBakery2,
        title: "Second slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: imgBakery3,
        title: "Third slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
];

const HomePage = () => {
    return (
        <>
            <ImageCarousel images={images} />
            <Container className="mt-5">
                <Row>
                    <Col md={7}>
                        <h2 className="fw-normal">
                            Bakery pertama dan satu-satunya <strong>yang fiksional</strong>.
                        </h2>
                        <p className="lead">
                            Diciptakan oleh <strong>[Nama Lengkap]</strong>, Mahasiswa Universitas Atma Jaya Yogyakarta dari program studi Informatika.
                        </p>
                        <p className="lead">
                            Nomor Pokok Mahasiswa: <strong>[NPM]</strong>.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img
                            src={imgFeaturette1} className="img-fluid mx-auto rounded shadow" role="img" aria-label="Gambar featurette 1"
                        />
                    </Col>
                </Row>

                {/* Tambahan Card Kanan-Kiri */}
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgBakery1}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 1"
                        />
                    </Col>
                    <Col md={7}>
                        <h3><strong>Your taste bud is key, experience the heartbeat of our bakery.</strong></h3>
                        <p className="lead">
                            Our modern, sophisticated bakery items are designed to exceed expectations with premium taste, 
                            quality where you need it, and thoughtful attention to detail.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={7}>
                        <h3>Your taste bud is key, experience the heartbeat of our bakery.</h3>
                        <p className="lead">
                            Our modern, sophisticated bakery items are designed to exceed expectations with premium taste, 
                            quality where you need it, and thoughtful attention to detail.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img
                            src={imgBakery2}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 2"
                        />
                    </Col>
                </Row>
                {/* Akhir Tambahan Card */}
                
                <Row className="mt-5 mb-5" />
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgBakery1}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 1"
                        />
                    </Col>
                    <Col md={7}>
                        <h3>Your taste bud is key, experience the heartbeat of our bakery.</h3>
                        <p className="lead">
                            Our modern, sophisticated bakery items are designed to exceed expectations with premium taste, 
                            quality where you need it, and thoughtful attention to detail.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={7}>
                        <h3>Your taste bud is key, experience the heartbeat of our bakery.</h3>
                        <p className="lead">
                            Our modern, sophisticated bakery items are designed to exceed expectations with premium taste, 
                            quality where you need it, and thoughtful attention to detail.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img
                            src={imgBakery2}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 2"
                        />
                    </Col>
                </Row>
                {/* Akhir Tambahan Card */}
                
                <Row className="mt-5 mb-5" />
            </Container>
        </>
    );
};

export default HomePage;
