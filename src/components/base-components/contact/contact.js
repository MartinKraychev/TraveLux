import { useState } from 'react';

import styles from "./contact.module.css"

export const Contact = () => {
    const initialFormData = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formMessage, setMessage] = useState('');
    const [messageClassName, setMessageClassName] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const onSubmit = async (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        if (!email || !name || !subject || !message) {
            setMessageClassName('error-message');
            setMessage('All fields are required!');
            return;
        }


        const options = {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'api-key': "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"
            },
            body: JSON.stringify({
                "sender": {
                    "name": name,
                    "email": email
                },
                "to": [{
                    "email": "martinkraychev987@gmail.com",
                    "name": "Martin Kraychev"
                }],
                "subject": subject,
                "htmlContent": `<html><head></head><body><p>Hello,</p>${message}</p></body></html>`
            })
        }

        const response = await fetch("https://api.brevo.com/v3/smtp/email", options)

        if (response.ok !== true) {
            const error = await response.json();
            setMessage(error)
            setMessageClassName('error-message');
            return;
        }

        setMessageClassName("success-message")
        setMessage("Email sent successfully")
        setFormData(initialFormData)
    }

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 600 }}
                >
                    <h1 className="mb-3">Contact Us</h1>
                    <p>
                        Get in Touch with Us. Whether you have questions, feedback, or just want to say hello, we're here to listen.
                        Reach out to our team and let's start a conversation.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-light rounded p-3">
                                    <div
                                        className="d-flex align-items-center bg-white rounded p-3"
                                        style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                    >
                                        <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                            <i className="fa fa-map-marker-alt text-primary" />
                                        </div>
                                        <span>123 Street, New York, USA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-light rounded p-3">
                                    <div
                                        className="d-flex align-items-center bg-white rounded p-3"
                                        style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                    >
                                        <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                            <i className="fa fa-envelope-open text-primary" />
                                        </div>
                                        <span>martinkraychev987@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-light rounded p-3">
                                    <div
                                        className="d-flex align-items-center bg-white rounded p-3"
                                        style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                    >
                                        <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                            <i className="fa fa-phone-alt text-primary" />
                                        </div>
                                        <span>+012 345 6789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe
                            title="Google Maps"
                            className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder={0}
                            style={{ minHeight: 400, border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                placeholder="Leave a message here"
                                                id="message"
                                                style={{ height: 150 }}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    {formMessage && <p className={styles[messageClassName]}>{formMessage}</p>}
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}