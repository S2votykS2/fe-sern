import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../../utils";
import { withRouter } from "react-router";

import { changeLanguageApp } from "../../../store/actions";

class HomeHeader extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  handleBackHome = () => {
    if (this.props.history) {
      this.props.history.push("/home");
    }
  };
  render() {
    // console.log("Check props:", this.props)
    return (
      <>
        <div className="header__container">
          <div className="grid">
            <div className="row">
              <div className="col__right">
                <i class="fas fa-bars"> </i>{" "}
                <div className="logo" onClick={() => this.handleBackHome()}>
                  {" "}
                </div>{" "}
              </div>{" "}
              <div className="col__centre">
                <div className="row">
                  <div className="col-4">
                    <div className="header">
                      <FormattedMessage id="homeheader.speciality" />
                    </div>{" "}
                    <div className="description">
                      <FormattedMessage id="homeheader.speciality-description" />
                    </div>{" "}
                  </div>{" "}
                  <div className="col-4">
                    <div className="header">
                      <FormattedMessage id="homeheader.clinix" />
                    </div>{" "}
                    <div className="description">
                      <FormattedMessage id="homeheader.clinix-description" />
                    </div>{" "}
                  </div>{" "}
                  <div className="col-4">
                    <div className="header">
                      <FormattedMessage id="homeheader.doctor" />
                    </div>{" "}
                    <div className="description">
                      <FormattedMessage id="homeheader.doctor-description" />
                    </div>{" "}
                  </div>{" "}
                  <div className="col-4">
                    <div className="header">
                      <FormattedMessage id="homeheader.checkupPackage" />
                    </div>{" "}
                    <div className="description">
                      <FormattedMessage id="homeheader.checkupPackage-description" />
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col__left">
                <div className="help">
                  {" "}
                  <i class="fas fa-question"> </i>{" "}
                  <FormattedMessage id="homeheader.support" />
                </div>{" "}
                <div className="phoneNumber"> 024 - 7301 - 2468 </div>{" "}
                <span
                  className={
                    this.props.language === "vi"
                      ? "language--active"
                      : "language"
                  }
                  onClick={() => this.handleChangeLanguage(languages.VI)}
                >
                  {" "}
                  VN{" "}
                </span>{" "}
                <span
                  className={
                    this.props.language === "en"
                      ? "language--active"
                      : "language"
                  }
                  onClick={() => this.handleChangeLanguage(languages.EN)}
                >
                  {" "}
                  EN{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {this.props.isShowSearch === true && (
          <div className="search__container">
            <div className="search__input">
              <div className="search__input__content">
                <div class="search__input__title">
                  <h1>
                    <FormattedMessage id="homesearch.header" />
                  </h1>{" "}
                  <FormattedMessage id="homesearch.description" />
                  <div> </div>{" "}
                </div>{" "}
                <div className="search__input__form">
                  <i class="fas fa-search"> </i>{" "}
                  <input type="text" placeholder="Tìm bác sĩ" />
                </div>{" "}
                <div className="search__input__download">
                  <div className="googleplay"> </div>{" "}
                  <div className="appstore"> </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="search__select">
              <div className="row">
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161905-iconkham-chuyen-khoa.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select1" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161817-iconkham-tu-xa.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select2" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161350-iconkham-tong-quan.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select3" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161340-iconxet-nghiem-y-hoc.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select4" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161403-iconsuc-khoe-tinh-than.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select5" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161410-iconkham-nha-khoa.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select6" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161421-icongoi-phau-thuat.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select7" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161542-iconsan-pham-y-te.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select8" />
                  </div>{" "}
                </a>{" "}
                <a href="" className="col">
                  <div
                    className="img"
                    style={{
                      backgroundColor: "#fff",
                      backgroundImage:
                        "url('../../../assets/images/HomeHeader/161442-iconbai-test-suc-khoe2.png')",
                      backgroundPosition: "centre",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>{" "}
                  <div className="description2">
                    <FormattedMessage id="homesearch.select9" />
                  </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )}{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // systemMenuPath: state.app.systemMenuPath
    // isLoggedIn:state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
