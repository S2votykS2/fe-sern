import React, { Component } from "react";
import { connect } from "react-redux";
import "./Slider.scss";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
class Slider extends Component {
  render() {
    return (
      <>
        <div className="slider">
          <div className="grid">
            <div className="row">
              {" "}
              {/* <OwlCarousel className="owl-theme" loop margin={10} nav> */}{" "}
              <div className="col-3">
                <div className="png"> </div>{" "}
                <div className="ctn">
                  <h3>
                    Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám{" "}
                  </h3>{" "}
                  <div>
                    Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng
                    di động và phần phầm quản trị, tích hợp 3 trong 1 nền tảng
                    tiện ích dễ dùng{" "}
                  </div>{" "}
                  <button>
                    XEM CHI TIẾT <i class="fas fa-chevron-right"> </i>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-3">
                <div className="png"> </div>{" "}
                <div className="ctn">
                  <h3>
                    Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám{" "}
                  </h3>{" "}
                  <div>
                    Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng
                    di động và phần phầm quản trị, tích hợp 3 trong 1 nền tảng
                    tiện ích dễ dùng{" "}
                  </div>{" "}
                  <button>
                    XEM CHI TIẾT <i class="fas fa-chevron-right"> </i>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-3">
                <div className="png"> </div>{" "}
                <div className="ctn">
                  <h3>
                    Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám{" "}
                  </h3>{" "}
                  <div>
                    Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng
                    di động và phần phầm quản trị, tích hợp 3 trong 1 nền tảng
                    tiện ích dễ dùng{" "}
                  </div>{" "}
                  <button>
                    XEM CHI TIẾT <i class="fas fa-chevron-right"> </i>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-3">
                <div className="png"> </div>{" "}
                <div className="ctn">
                  <h3>
                    Giải pháp chuyển đổi số toàn diện cho bệnh viện, phòng khám{" "}
                  </h3>{" "}
                  <div>
                    Mô hình "Nền tảng như một dịch vụ" bao gồm Website, ứng dụng
                    di động và phần phầm quản trị, tích hợp 3 trong 1 nền tảng
                    tiện ích dễ dùng{" "}
                  </div>{" "}
                  <button>
                    XEM CHI TIẾT <i class="fas fa-chevron-right"> </i>{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              {/* </OwlCarousel>{" "} */}{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
