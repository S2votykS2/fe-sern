import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";
import { toast } from "react-toastify";
import { languages } from "../../../../utils";
import moment from "moment";
import BookingModal from "../Modal/BookingModal";
// import localization from "moment/locate/vi";
import "./DoctorSchedule.scss";

class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      toggleModal: false,
      time: {},
    };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.schedules !== this.props.schedules) {
      this.setState({
        schedules: this.props.schedules,
      });
    }
  }
  handleClickSchedule = (schedule) => {
    this.setState({
      isOpenModal: true,
      time: schedule,
    });
  };

  isOpenFromParent = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  render() {
    // console.log("Check props:", this.props);
    let { schedules } = this.state;
    let { language } = this.props;
    return (
      <Fragment>
        <div className="grid">
          <ul className="schedules">
            {" "}
            {schedules && schedules.length > 0 ? (
              schedules.map((schedule, index) => {
                return (
                  <li onClick={() => this.handleClickSchedule(schedule)}>
                    <button type="" className="">
                      {" "}
                      {language === "vi"
                        ? schedule.timeTypeData.valueVI
                        : schedule.timeTypeData.valueEN}{" "}
                    </button>{" "}
                  </li>
                );
              })
            ) : (
              <div>
                {" "}
                Bác sĩ không có lịch hẹn trong thời gian này, Bug(Hardcode, cần
                khai báo component Động){" "}
              </div>
            )}{" "}
          </ul>{" "}
          <div className="click">
            Chọn <i class="far fa-hand-pointer"> </i>
            và đặt(Phí đặt lịch 0 đ){" "}
          </div>{" "}
        </div>{" "}
        <BookingModal
          isOpenFromParent={this.state.isOpenModal}
          toggleFromParent={this.toggleModal}
          timeFromParent={this.state.time}
        />{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
