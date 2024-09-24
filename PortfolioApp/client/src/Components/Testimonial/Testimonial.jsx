import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade,Zoom } from "react-awesome-reveal";

const Testimonial = () => {
  const data = [
    {
      name: "Emily",
      position: "CEO",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Michel",
      position: "Product Manager",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Charlote",
      position: "Marketing Manager",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Muller",
      position: "Partner",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jon Doe",
      position: "CTO",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Martin",
      position: "Senior Developer",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/26985125/pexels-photo-26985125/free-photo-of-photo-of-a-man-wearing-a-sweater-and-a-vest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "David",
      position: "Full Stack Developerr",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/26985125/pexels-photo-26985125/free-photo-of-photo-of-a-man-wearing-a-sweater-and-a-vest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jonson",
      position: "UI/UX Designer",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img: "https://images.pexels.com/photos/26985125/pexels-photo-26985125/free-photo-of-photo-of-a-man-wearing-a-sweater-and-a-vest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const colors = [
  //   "#FFBF00",
  //   "#FF7F50",
  //   "#F0E68C",
  //   "#9FE2BF",
  //   "#40E0D0",
  //   "#6495ED",
  //   "#CCCCFF",
  //   "#FF00FF",
  //   "#800080",
  //   "#008080",
  //   "#008000",
  //   "#800000",
  //   "#DC143C",
  //   "#FF69B4",
  //   "#00CED1",
  // ];

   return (
    <div className="container testimonial-section" id="testimonial">
      <Fade>
        <div className="section-title">
          <h5>Testimonial</h5>
          <span className="line"></span>
        </div>
      </Fade>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom key={item.name + index}>
              <div className="content-slider-main">
                <div className="content-slider">
                  <img
                    src={item.img}
                    alt={`${item.name}'s testimonial`}
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.des}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

// style={{ backgroundColor: colors[index] }}  random color ///