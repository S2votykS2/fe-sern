import React, { Component } from "react";
import { connect } from "react-redux";
import "./Clinic.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Clinic extends Component {
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
        <div className="clinic">
          <div className="grid">
            <div class="title"> Cơ sở y tế nổi bật </div>{" "}
            <div className="more">
              <a href=""> Tìm kiếm </a>{" "}
            </div>{" "}
            <div className="row">
              <Slider {...settings}>
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
                </div>{" "}
                <div className="col-4">
                  <div className="img"> </div>{" "}
                  <div className="ctn"> Bệnh viện hữu nghị Việt Đức </div>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(Clinic);
