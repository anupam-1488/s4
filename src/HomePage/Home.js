import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../Header';
import { useNavigate } from 'react-router-dom';

const latestProducts = [
    {
        name: "SHOULDER ARTHROSCOPY DRAPE",
        originalPrice: "₹1,200.00",
        discountedPrice: "₹600.00",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "ARTHROSCOPY KNEE O DRAPE",
        originalPrice: "₹1,200.00",
        discountedPrice: "₹600.00",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "ENLARGER - FULL HANDLE KNIFE",
        originalPrice: "₹3,000.00",
        discountedPrice: "₹1,800.00",
        imgSrc: "/Images/trail.jpg",
        discountNote: "MOQ/5 BOXES - 20% Discount"
    },
    {
        name: "M.V.R - FULL HANDLE KNIFE, ANGLED",
        originalPrice: "₹4,250.00",
        discountedPrice: "₹2,550.00",
        imgSrc: "/Images/trail.jpg",
        discountNote: "MOQ/5 BOXES - 20% Discount"
    }
];

const additionalProducts = [
    {
        name: "STERI-COVER",
        description: "Disposable Sterile Equipment Cover",
        details: "Diamond Medicare® is a manufacturing the product of Sterile Equipment Cover. Under brand name is Steri-Cover®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "DIAMOND DRAPES",
        description: "Disposable Sterile Drapes",
        details: "Diamond Medicare® is a manufacturing of Disposable Sterile Drapes under brand name of Diamond Drapes®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "OT WEAR",
        description: "Disposable Sterile OT Dresses",
        details: "Diamond Medicare® is a manufacturing of Disposable Sterile OT Dresses under brand name of OT Wear®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "OT PACK",
        description: "Disposable Sterile OT Sheet and Drapes",
        details: "Diamond Medicare® is a manufacturing of Disposable Sterile OT Sheet and Drapes under brand name of OT Pack®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "M-DRESS",
        description: "Disposable Sterile Post Operative Dressing Packs",
        details: "Diamond Medicare® is a manufacturing of Disposable sterile post-operative Dressing packs under brand name of M-Dress®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "M-SHIELD",
        description: "Disposable Sterile Post Operative Wound Area",
        details: "Diamond Medicare® is a manufacturing of Disposable sterile post-operative wound area under brand name of M-Shield®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "M-SWAB",
        description: "Disposable Sterile Highly Absorbent Cotton Swabs",
        details: "Diamond Medicare® is a manufacturing of Disposable sterile highly absorbent cotton swabs under brand name of M-Swab®.",
        imgSrc: "/Images/trail.jpg"
    },
    {
        name: "EASYFLOW",
        description: "Micro Surgical Cannulas",
        details: "Diamond Medicare® is a manufacturing of Micro Surgical Cannulas under brand name of Easyflow®.",
        imgSrc: "/Images/trail.jpg"
    }
];

const Home = () => {
    const navigate = useNavigate();
    const medicalBlue = '#0066cc'; // Define your medical blue here

    return (
        <div>
            <Header />
            <main>
           
                <section className="welcome" style={{ color: medicalBlue }}>
                    <h1>WELCOME TO</h1>
                    <h2>S FOUR HEALTH CARE SOLUTIONS®</h2>
                    <p>S four health care solutions® is a Leading Manufacturer of Medical and Surgical Disposables.</p>
                    <p>S four health care solutions® having well expertise products Surgical Drapes and Gowns.</p>
                </section>
                {/* Other sections... */}
           

                <section className="products bg" style={{ backgroundColor: medicalBlue }}>
                    <img src='/Images/circle.png' alt='Image1' style={{ position: 'absolute', top: '16vh', right: '1681px', transform: 'rotate(180deg)' }} />

                    <h2 style={{ color: '#fff' }}>Shop Our Latest Products</h2>
                    <div className="product-list">
                        {latestProducts.map((product, index) => (
                            <div className="product-card latest" key={index}>
                                <img src={product.imgSrc} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className="original-price">MRP: <span>{product.originalPrice}</span></p>
                                <p className="discounted-price">Price: {product.discountedPrice}</p>
                                {product.discountNote && <p className="discount-note">{product.discountNote}</p>}
                                <button type='button' onClick={() => navigate("/product")}>Shop Now</button>
                            </div>
                        ))}
                    </div>

                </section>

                <section className="additional-products" style={{ backgroundImage: 'url(/Images/leaf.webp)', backgroundRepeat: 'repeat', backgroundSize: '50px 50px' }}>
                    <h2 style={{ color: medicalBlue }}>S4 Health Care Solutions® – Leading the Way in Safe and Effective Care</h2>
                    <p>Our excellent team is ready to be part of your team to work with effective excellent material.</p>
                    <center>
                        <div className="product-grid">
                            {additionalProducts.map((product, index) => (
                                <div className="product-card existing" key={index}>
                                    <img src={product.imgSrc} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p className="description">{product.description}</p>
                                    <p className="details">{product.details}</p>
                                    <button type='button' onClick={() => navigate("/product")}>Shop Now</button>
                                </div>
                            ))}
                        </div>
                    </center>
                </section>

                <Container className='pt-4'>
                    <Row>
                        <Col xl={6} className='pt-5'>
                            <h2 style={{ color: medicalBlue }}>About Us</h2>
                            <p>
                                At Diamond Medicare®, we are committed to producing high-quality medical and surgical disposable products.
                                Our mission is to improve healthcare standards by offering reliable and effective products. Our team of
                                experts works diligently to innovate and deliver products that meet the highest standards of quality and
                                safety.
                            </p>
                            <p>
                                Our company has a strong reputation for excellence in the healthcare industry, and we take pride in our
                                dedication to customer satisfaction. We continually strive to exceed expectations and provide solutions
                                that enhance the wellbeing of patients and healthcare providers alike.
                            </p>
                        </Col>
                        <Col xl={1} style={{ borderLeft: '1px solid black', height: '45vh' }}></Col>
                        <Col xl={5} className='pt-5'>
                            <img src="/Images/trail.jpg" alt="S4 Health care Solutions" style={{ width: '100%', height: 'auto' }} />
                        </Col>
                    </Row><pre /><pre /><pre /><pre /><pre />
                </Container>
            </main>
        </div>
    );
};

export default Home;
