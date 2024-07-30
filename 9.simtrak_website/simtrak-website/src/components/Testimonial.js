import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <section className="testimonials">
            <h2>Our Testimonials</h2>
            <div className="testimonial-content">
                <p>
                    In the last year, we have established two non-profit organizations SAWEC both in Canada and the USA. 
                    We have volunteers located in three countries, Canada, India, and the USA. Simtrak Solutions led by 
                    Simran Sharma manages a number of tasks for SAWEC such as website management, coordination with 
                    volunteers and board, meeting the statutory requirements, and conducting the meetings. Simtrak’s 
                    turnaround time is very short and accurate and they are very reliable, energetic, and enthusiastic. 
                    Without Simtrak's help, we wouldn’t have conducted our affairs very smoothly.
                </p>
                <div className="author">
                    <img src="https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/testonomial.jpg?w=300&ssl=1" alt="Suneel Rajavaram" className="author-image" />
                    <div className="author-info">
                        <p className="author-name">Suneel Rajavaram</p>
                        <p className="author-position">President, SAWEC, Canada</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
