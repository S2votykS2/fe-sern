import React, { Component } from "react";
import { connect } from "react-redux";
import "./Speciality.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Speciality extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <>
        <div className="speciality">
          <div className="grid">
            <div class="title"> Chuyên khoa phổ biến </div>{" "}
            <div className="more">
              <a href=""> Xem thêm </a>{" "}
            </div>{" "}
            <div className="row">
              {" "}
              <Slider {...settings}>
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp1 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp2 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp3 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp4 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp5 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp6 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp7 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp8 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp9 </div>{" "}
                </div>{" "}
                <div className="col-4 customize">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Cơ xương khớp10 </div>{" "}
                </div>{" "}
              </Slider>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
