import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import "./DetailDoctor.scss";
import { withRouter } from "react-router";
import { languages } from "../../../utils";
import moment from "moment";
// import localization from "moment/locate/vi";
import HomeHeader from "../../HomePage/HomeHeader/HomeHeader";
import DoctorSchedule from "./DoctorSchedule/DoctorSchedule";
import DoctorAddress from "./DoctorInfo/DoctorAddress";
import {
  getDoctorSchedule,
  getDoctorAddress,
} from "../../../services/crudService";

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorId: this.props.match.params.id[1],
      detailDoctor: [],
      allDays: [],
      detailSchedule: [],
      insurance: [],
      doctorInfo: {},
    };
  }

  async componentDidMount() {
    // Goi api
    let doctorInfo = await getDoctorAddress(this.props.match.params.id[1]);
    if (doctorInfo.data && doctorInfo.data.errCode === 0) {
      this.setState({
        doctorInfo: doctorInfo.data.doctorInfo,
        insurance: doctorInfo.data.insurance,
      });
    }

    this.props.fetchDetailDoctor(this.props.match.params.id[1]);
    // Format Date
    console.log("moment vi", moment(new Date()).format("dddd - DD/MM"));
    console.log(
      "moment en",
      moment(new Date()).locale("en").format("dddd - DD/MM")
    );
    let allDays = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      object.label = moment(new Date()).add(i, "days").format("dddd - DD/MM");
      object.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      allDays.push(object);
    }
    console.log("allDays", allDays);
    this.setState({
      allDays: allDays,
    });
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.detailDoctor !== this.props.detailDoctor) {
      this.setState({
        detailDoctor: this.props.detailDoctor,
      });
    }
    if (prevProps.doctorSchedule !== this.props.doctorSchedule) {
      this.setState({
        detailSchedule: this.props.doctorSchedule,
      });
      console.log("detailSchedule", this.state.detailSchedule);
    }
  }
  handleSelectOption = async (event) => {
    this.setState({
      date: event.target.value,
    });
    // Gọi API redux
    this.props.fetchDetailSchedule(this.state.doctorId, event.target.value);
    // Goi API Thuog
    // let res = await getDoctorSchedule(this.state.doctorId, event.target.value);
    // if (res.data.errCode === 0 && res.data.data.length > 0) {
    //   this.setState({
    //     detailSchedule: res.data.data,
    //   });
    // } else {
    //   this.setState({
    //     detailSchedule: res.data.data,
    //   });
    // }
  };

  render() {
    // console.log("Check params:", this.props.match.params.id);
    // console.log("Check props:", this.props);
    // console.log("Check state:", this.state);
    let { detailDoctor, allDays } = this.state;
    let { language } = this.props;
    return (
      <Fragment>
        <HomeHeader isShowSearch={false} />{" "}
        <div className="detail-doctor">
          <div className="grid">
            <div className="row1"> Ten duong link </div>{" "}
            <div className="row2">
              <div className="image-doctor"> </div>{" "}
              <div className="introduce-doctor">
                <div className="name-doctor">
                  {" "}
                  {language === "vi"
                    ? `${detailDoctor.firstName} ${detailDoctor.lastName}`
                    : `${detailDoctor.lastName} ${detailDoctor.firstName}`}{" "}
                </div>{" "}
                <div className="summary-doctor">
                  {" "}
                  {/* {detailDoctor.MarkdownData.description} */}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row3">
              <select
                className="select-schedule"
                onChange={(event) => this.handleSelectOption(event)}
              >
                {" "}
                {allDays &&
                  allDays.length > 0 &&
                  allDays.map((day, index) => {
                    return (
                      <option value={day.value} key={index}>
                        {" "}
                        {day.label}{" "}
                      </option>
                    );
                  })}{" "}
              </select>{" "}
              <div for="" className="title2">
                <i class="fas fa-calendar-check"> </i>Lịch khám{" "}
              </div>{" "}
              <div className="content2">
                <div className="schedule">
                  <DoctorSchedule schedules={this.state.detailSchedule} />{" "}
                </div>{" "}
                <div className="address">
                  {" "}
                  {
                    <DoctorAddress
                      doctorInfo={this.state.doctorInfo}
                      insurance={this.state.insurance}
                    />
                  }{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="row4"
              // dangerouslySetInnerHTML={{
              //   __html: `<p>First &middot; Second</p>
              //   ${detailDoctor.MarkdownData.contentHTML}
              //   `,
              // }}
            ></div>{" "}
          </div>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    detailDoctor: state.sern.detailDoctor,
    doctorSchedule: state.sern.doctorSchedule,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailDoctor: (idInput) => {
      dispatch(actions.fetchDetailDoctor(idInput));
    },
    fetchDetailSchedule: (idInput, date) => {
      dispatch(actions.fetchDetailSchedule(idInput, date));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailDoctor)
);
