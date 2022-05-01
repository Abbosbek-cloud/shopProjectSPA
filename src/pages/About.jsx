import React, { Component } from "react";
import IMAGE from "./img/personal.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { Badge, Table } from "reactstrap";

export default class About extends Component {
  render() {
    const imgStyle = {
      borderRadius: "15px",
      height: "500px",
      objectFit: "cover",
      width: "100%",
    };
    const items = [
      "HTML 5",
      "CSS 3",
      "Bootstrap 5",
      "SCSS/SASS",
      "JavaScript",
      "React",
      "Redux",
      "React-redux",
      "Redux-toolkit",
      "json-server",
      "NPM",
      "Git",
      "GitHub",
    ];
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-12 col-lg-6">
            <div className="p-2">
              <img src={IMAGE} alt="Abbosbek Sulaymonov" style={imgStyle} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-2">
              <h1 className="">About the author</h1>
              <p
                style={{ color: "black", textAlign: "justify" }}
                className="fs-3"
              >
                I am Abbosbek Sulaymonov. I am 21 years old Front End developer
                from Uzbekistan. Making responsive and attractive web-sites is
                my job. I just like making something easy for people. You can
                hire me if you want a young and energized developer. Here you
                may see what I know below.
              </p>
              <div className="badgeWrapper">
                {items.map((item) => (
                  <Badge
                    className="p-2 fs-5"
                    color="secondary m-2"
                    style={{ cursor: "pointer" }}
                    outline
                  >
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="contacts d-flex">
                <div className="contactItem">
                  <a className="telegram" href="https://t.me/abeksulaymonov">
                    <FaTelegramPlane className="contactIcon telegram" />
                  </a>
                </div>
                <div className="contactItem">
                  <a
                    className="instagram"
                    href="https://www.instagram.com/abek_sulaymonov_01/"
                  >
                    <GrInstagram className="contactIcon instagram" />
                  </a>
                </div>
                <div className="contactItem">
                  <a
                    className="linkedIn"
                    href="https://www.linkedin.com/in/abek-walker-8b6230201/"
                  >
                    <GrLinkedin className="contactIcon linkedIn" />
                  </a>
                </div>
                <div className="contactItem">
                  <a className="email" href="mailto:abek01sulaymonov@gmail.com">
                    <MdAlternateEmail className="contactIcon email" />
                  </a>
                </div>
                <div className="contactItem">
                  <a className="phone" href="tel:+998934880352">
                    <BsTelephoneFill className="contactIcon phone" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

