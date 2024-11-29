import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';

const Aboutus = () => {
    const navigate = useNavigate();
    const medicalBlue = '#0077b6'; // Medical blue theme color

    const handleImageClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <Header />
            <div className="container py-4">
                <section className="main-content">
                    <article className="about mb-5">
                        <h2 className="managementh2 mb-4" style={{ color: medicalBlue }}>About Company</h2>
                        <div className='form-control'>
                            <p>
                                <strong>Diamond Medicare<sup>&reg;</sup></strong> is a leading manufacturer of Surgical Disposables and Medical Equipments<sup>&reg;</sup>, founded on 28th December 2003. 
                                With a dedicated R&D team and sales network, we fulfill the state-of-the-art requirements of surgeons and hospitals worldwide. Our mission is to make advanced technology and equipment easily accessible to all healthcare professionals.
                            </p>
                            <h2 style={{ color: medicalBlue }}>Our Features</h2>
                            <ul>
                                <li>Comprehensive range of surgical disposables, consumables, and high-tech equipment.</li>
                                <li>Manufacturing in Class 10000 and 100000 cleanroom facilities.</li>
                                <li>Certified with ISO 13485:2016 Quality System.</li>
                                <li>CE 1054 Product Certification.</li>
                                <li>National representatives and distributors for wide-reaching clients.</li>
                                <li>Dedicated customer support for on-time deliveries and assistance.</li>
                                <li>Collaboration with Swiss technology.</li>
                                <li>Advanced ultrasonic technology for product manufacturing.</li>
                            </ul>
                        </div>
                    </article>

                    <aside className="features mb-5">
                        <h2 style={{ color: medicalBlue }}>Our Gallery</h2>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/trail.jpg"
                                    alt="First slide"
                                    onClick={() => handleImageClick("/")}
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/trail.jpg"
                                    alt="Second slide"
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                            {/* Additional carousel items can go here */}
                        </Carousel>
                    </aside>

                    <aside className="additional-info">
                        <h2 style={{ color: medicalBlue }}>Our Infrastructure</h2>
                        <p>
                            Our state-of-the-art infrastructural facility ensures all business operations are performed efficiently. 
                            We have dedicated departments for design, production, quality control, research, and development to maintain high standards of precision and excellence.
                        </p>

                        <h2 style={{ color: medicalBlue }}>Our Vendor Base</h2>
                        <p>
                            We work closely with industry-renowned vendors who supply us with high-quality raw materials, ensuring we deliver top-quality products to our clients. Our vendor selection process involves strict evaluation of past performance, market reputation, financial stability, and other important factors.
                        </p>

                        <h2 style={{ color: medicalBlue }}>Our Company Works</h2>
                        <Carousel style={{ height: "auto" }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/trail.jpg"
                                    alt="First slide"
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/Images/trail.jpg"
                                    alt="Second slide"
                                    style={{ height: '400px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                            {/* Additional carousel items can go here */}
                        </Carousel>
                    </aside>
                </section>
            </div>
        </div>
    );
};

export default Aboutus;
