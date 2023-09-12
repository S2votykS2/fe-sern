import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeFooter from "./HomeFooter/HomeFooter";
import Slider from "./HomeContent/Slider";
import Speciality from "./HomeContent/Speciality";
import Clinic from "./HomeContent/Clinic";
import Doctor from "./HomeContent/Doctor";
import Handbook from "./HomeContent/Handbook";
class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader isShowSearch={true} /> <Slider> </Slider>{" "}
        <Speciality> </Speciality> <Clinic> </Clinic> <Doctor> </Doctor>{" "}
        <Handbook> </Handbook> <HomeFooter> </HomeFooter>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
