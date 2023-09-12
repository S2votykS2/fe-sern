import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";
import { toast } from "react-toastify";
import { languages } from "../../../../utils";
import {
  getDoctorSchedule,
  getAllDoctorsService,
} from "../../../../services/crudService";
import "./DoctorAddress.scss";

class DoctorAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPrice: false,
      isShowInsurance: false,
      doctorInfo: {},
      insurance: [],
    };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.doctorInfo !== this.props.doctorInfo) {
      this.setState({
        doctorInfo: this.props.doctorInfo,
      });
    }
    if (prevProps.insurance !== this.props.insurance) {
      this.setState({
        insurance: this.props.insurance,
      });
    }
  }
  handleShowPrice = () => {
    this.setState({
      isShowPrice: true,
    });
  };
  handleHidePrice = () => {
    this.setState({
      isShowPrice: false,
    });
  };
  handleShowInsurance = () => {
    this.setState({
      isShowInsurance: true,
    });
  };
  handleHideInsurance = () => {
    this.setState({
      isShowInsurance: false,
    });
  };
  render() {
    // console.log("Check props:", this.props);
    // console.log("Check state:", this.state);
    let { language } = this.props;
    let { doctorInfo, insurance } = this.state;
    return (
      <Fragment>
        <div className="grid">
          <div className="address">
            <div className="title2"> địa chỉ khám </div>{" "}
            <div className="nameClinic"> {doctorInfo.nameClinic} </div>{" "}
            <div className="addressClinic">
              {" "}
              {/* {`${doctorInfo.addressClinic} ${doctorInfo.provinceData.valueVI}`}{" "} */}{" "}
            </div>{" "}
          </div>{" "}
          <div className="price">
            Giá khám:{" "}
            <span className="price-from">
              {" "}
              {/* {language === "vi"
                                                ? doctorInfo.priceData.valueVI
                                                : doctorInfo.priceData.valueEN}{" "} */}{" "}
            </span>{" "}
            <span className="price-to"> </span>{" "}
            <button
              type=""
              className="click-detail"
              onClick={() => this.handleShowPrice()}
            >
              xem chi tiết{" "}
            </button>{" "}
            <div
              className={
                !this.state.isShowPrice
                  ? "price-detail collapse"
                  : "price-detail"
              }
            >
              <ul>
                <li>
                  <div className="title2"> Giá khám </div>{" "}
                  <div className="description">
                    Giá khám thay đổi tùy theo ngày Bác sĩ khám ở phòng VIP và
                    phòng khám thường Giá khám thường: 150.000 Đ Giá khám VIP:
                    300.000 Đ Bệnh nhân sử dụng Bảo hiểm tư nhân vui lòng đến
                    khám trước 15 h hàng ngày{" "}
                  </div>{" "}
                </li>{" "}
                <li>
                  <div className="title2"> </div> Phòng khám có thanh toán bằng
                  hình thức{" "}
                  {/* {language === "vi"
                                                    ? doctorInfo.paymentData.valueVI
                                                    : doctorInfo.paymentData.valueEN}{" "} */}{" "}
                </li>{" "}
              </ul>{" "}
              <button
                type=""
                className="collapse2"
                onClick={() => this.handleHidePrice()}
              >
                ẩn bảng giá{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="insurance">
            <div className="title2">
              loại bảo hiểm áp dụng{" "}
              <button
                type=""
                className="click-detail"
                onClick={() => this.handleShowInsurance()}
              >
                {" "}
                xem chi tiết{" "}
              </button>{" "}
            </div>{" "}
            <div
              className={
                this.state.isShowInsurance
                  ? "insurance-detail"
                  : "insurance-detail collapse"
              }
            >
              <ul>
                {" "}
                {insurance &&
                  insurance.length > 0 &&
                  insurance.map((item) => {
                    return (
                      <li>
                        <div className="insurance-type">
                          {" "}
                          {item.nameInsurance}{" "}
                        </div>{" "}
                        <div className="description"> {item.description} </div>{" "}
                      </li>
                    );
                  })}{" "}
              </ul>{" "}
              <button
                type=""
                className="collapse2"
                onClick={() => this.handleHideInsurance()}
              >
                {" "}
                thu gọn{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorAddress);
