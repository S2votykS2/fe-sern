import React, { Component } from "react";
import { connect } from "react-redux";
import "./Doctor.scss";
import { languages } from "../../../utils/constant";
import * as actions from "../../../store/actions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withRouter } from "react-router";

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topDoctors: [],
    };
  }
  async componentDidMount() {
    this.props.fetchTopDoctor(8);
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.topDoctors !== this.props.topDoctors) {
      this.setState({
        topDoctors: this.props.topDoctors,
      });
    }
  }
  handleDetailDoctor = (data) => {
    if (this.props.history) {
      this.props.history.push(`detail-doctor/:${data.id}`);
    }
    // console.log("Check params:", this.props.match.params.id); --> ra undefined
  };

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    // console.log("check props:", this.props);
    // console.log("check state:", this.state);
    let doctors = this.state.topDoctors;
    let language = this.props.language;
    console.log("Doctor:", doctors);
    return (
      <>
        <div className="doctor">
          <div className="grid">
            <div class="title"> Bác sĩ nổi bật tuần qua </div>{" "}
            <div className="more">
              <a href=""> Tìm kiếm </a>{" "}
            </div>{" "}
            <div className="row">
              <Slider {...settings}>
                {" "}
                {doctors &&
                  doctors.length > 0 &&
                  doctors.map((doctor, index) => {
                    let role2 =
                      language === languages.VI
                        ? `${doctor.positionData.valueVi}, ${doctor.roleData.valueVi}`
                        : `${doctor.positionData.valueEn}, ${doctor.roleData.valueEn}`;
                    let name1 =
                      language === languages.VI
                        ? `${doctor.firstName} ${doctor.lastName}`
                        : `${doctor.lastName} ${doctor.firstName}`;
                    return (
                      <div
                        className="col-4"
                        onClick={() => this.handleDetailDoctor(doctor)}
                      >
                        <div
                          className="image"
                          style={{
                            // backgroundImage: `url('../../../assets/images/HomeContent/Doctor/114430-bshung.jpg'})`,
                            // backgroundRepeat: "no-repeat",
                            // backgroundPosition: "centre",
                            backgroundSize: "cover",
                          }}
                        ></div>{" "}
                        <div className="ctn">
                          <div className="name">
                            {" "}
                            {role2} <br /> {name1}{" "}
                          </div>{" "}
                          <div className="speciality2"> Da liễu </div>{" "}
                        </div>{" "}
                      </div>
                    );
                  })}{" "}
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
    language: state.app.language,
    topDoctors: state.sern.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopDoctor: (limitInput) => {
      dispatch(actions.fetchTopDoctor(limitInput));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));
// export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
