import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { languages } from "../../utils";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  handleChangeLanguage = (lang) => {
    this.props.changeLanguageAppRedux(lang);
  };
  render() {
    const { processLogout, language } = this.props;

    return (
      <div className="header-container">
        {" "}
        {/* thanh navigator */}{" "}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />{" "}
        </div>
        {/* nút logout va chuyển đổi language*/}{" "}
        <div className="header-tail">
          <div className="languages">
            <span
              className={
                language === "en" ? "language-en active" : "language-en"
              }
              onClick={() => this.handleChangeLanguage(languages.EN)}
            >
              {" "}
              EN{" "}
            </span>{" "}
            <span
              className={
                language === "vi" ? "language-vi active" : "language-vi"
              }
              onClick={() => this.handleChangeLanguage(languages.VI)}
            >
              {" "}
              VI{" "}
            </span>{" "}
          </div>{" "}
          <div className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"> </i>{" "}
          </div>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
