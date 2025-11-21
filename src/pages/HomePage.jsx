import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import imgFeaturette1 from "../assets/images/feat1.jpg";
import imgFeaturette2 from "../assets/images/feat2.jpg";
import imgCinema1 from "../assets/images/cinema1.jpeg";
import imgCinema2 from "../assets/images/cinema2.jpeg";
import imgCinema3 from "../assets/images/cinema3.jpeg";

const images = [
    {
        img: imgCinema1,
        title: "Now Showing",
        description: "Nikmati pengalaman menonton film terbaru dengan kualitas terbaik.",
    },
    {
        img: imgCinema2,
        title: "Coming Soon",
        description: "Film-film blockbuster yang akan segera hadir untuk Anda.",
    },
    {
        img: imgCinema3,
        title: "Exclusive Premiere",
        description: "Tonton lebih dulu sebelum yang lain hanya di bioskop kami.",
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
                            Bioskop modern dengan teknologi <strong>Ultra-HD & Dolby Atmos</strong>.
                        </h2>
                        <p className="lead">
                            Dikelola oleh <strong>[Kelompok 8]</strong>,
                            Mahasiswa Universitas Atma Jaya Yogyakarta program studi Informatika.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img
                            src={imgFeaturette1}
                            className="img-fluid mx-auto rounded shadow"
                            role="img"
                            aria-label="Gambar featurette bioskop"
                        />
                    </Col>
                </Row>

                {/* Card Kanan-Kiri */}
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgCinema1}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Cinema Hall"
                        />
                    </Col>
                    <Col md={7}>
                        <h3><strong>Rasakan sensasi menonton yang imersif.</strong></h3>
                        <p className="lead">
                            Dengan layar besar dan kualitas suara canggih, setiap detik film menjadi pengalaman
                            yang hidup dan tak terlupakan.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={7}>
                        <h3>Film terbaik, kenyamanan terbaik.</h3>
                        <p className="lead">
                            Kursi empuk, ruang teater luas, dan suasana eksklusif
                            memastikan Anda menikmati film dengan maksimal.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img
                            src={imgCinema2}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Cinema Seats"
                        />
                    </Col>
                </Row>

                {/* Tambahan Card 2 */}
                <Row className="mt-5 mb-5" />
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgCinema3}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Movie Poster"
                        />
                    </Col>
                    <Col md={7}>
                        <h3>Pilihan film terlengkap untuk semua genre.</h3>
                        <p className="lead">
                            Dari action, romance, horror, hingga anime. Pilih film favoritmu dan nikmati tanpa batas.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={7}>
                        <h3>Promo menarik setiap minggu!</h3>
                        <p className="lead">
                            Dapatkan diskon tiket, paket popcorn, dan penawaran eksklusif lainnya
                            hanya di bioskop kami.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img
                            src={imgCinema2}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Cinema Promo"
                        />
                    </Col>
                </Row>

                <Row className="mt-5 mb-5" />
            </Container>
        </>
    );
};

export default HomePage;
