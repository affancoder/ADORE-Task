import React from "react";
import Slider from "react-slick";
import "./ClientCarousel.css";


const clientLogos = [
  { id: 1, src: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/logo-orange-e1696652807805.png?fit=768%2C121&ssl=1", alt: "LSET" },
  { id: 2, src: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/Final-logo.png?resize=768%2C263&ssl=1", alt: "EncodiQ" },
  { id: 3, src: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/05/foreword-1.png?w=735&ssl=1", alt: "Shubh" },
  { id: 4, src: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/03/1656516867649-e1663956648813.jpg?resize=768%2C484&ssl=1", alt: "Garg" },
  { id: 5, src: "https://i0.wp.com/simtrak.in/wp-content/uploads/2023/10/infouve.jpg?w=466&ssl=1", alt: "Storewise" },
];

const ClientCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="client-carousel">
      <h2>Clients who trust us</h2>
      <Slider {...settings}>
        {clientLogos.map((logo) => (
          <div key={logo.id}>
            <img src={logo.src} alt={logo.alt} style={{ maxWidth: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
