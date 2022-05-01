import React, { Component } from "react";
import Slider from "react-slick";
import { GrFormNext } from "react-icons/gr";
import Card from "../components/Card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.5) ",
        borderRadius: "50%",
        color: "black",
      }}
      onClick={onClick}
    >
      <GrFormNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.5) ",
        borderRadius: "50%",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    const props = this.props;
    return (
      <div className="container mt-5">
        <Slider {...settings}>
          {props.products.map((item) => (
            <Card key={item.id} data={item} status={true} />
          ))}
        </Slider>
      </div>
    );
  }
}
