import React, { Component } from "react";
import { connect } from "react-redux";
import "./Handbook.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Handbook extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <>
        <div className="handbook">
          <div className="grid">
            <div class="title"> Cẩm nang </div>{" "}
            <div className="more">
              <a href=""> Tất cả bài viết </a>{" "}
            </div>{" "}
            <div className="row">
              <Slider {...settings}>
                <div className="col-6">
                  <div className="image"> </div>{" "}
                  <div className="ctn">
                    5 Bệnh viên, phòng khám da liễu uy tín Quận 9{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-6">
                  <div className="image"> </div>{" "}
                  <div className="ctn">
                    5 Bệnh viên, phòng khám da liễu uy tín Quận 9{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-6">
                  <div className="image"> </div>{" "}
                  <div className="ctn">
                    5 Bệnh viên, phòng khám da liễu uy tín Quận 9{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-6">
                  <div className="image"> </div>{" "}
                  <div className="ctn">
                    5 Bệnh viên, phòng khám da liễu uy tín Quận 9{" "}
                  </div>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
