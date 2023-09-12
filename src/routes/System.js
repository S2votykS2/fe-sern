import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import CrudRedux from "../containers/System/Admin/CrudRedux";
import ManageDoctor from "../containers/System/Admin/ManageDoctor";
import ManagePatient from "../containers/System/Admin/ManagePatient";
import ManageAmin from "../containers/System/Admin/ManageAmin";
import ManageSchedule from "../containers/System/Admin/ManageSchedule";
import DoctorInfo from "../containers/System/Admin/DoctorInfo";
import ProductManage from "../containers/System/ProductManage";
import RegisterPackageGroupOrAcc from "../containers/System/RegisterPackageGroupOrAcc";

class System extends Component {
  render() {
    const { systemMenuPath } = this.props;
    return (
      <div className="system-container">
        <div className="system-list">
          <Switch>
            <Route path="/system/user-manage" component={UserManage} />{" "}
            <Route path="/system/crud-redux" component={CrudRedux} />{" "}
            <Route path="/system/manage-admin" component={ManageAmin} />{" "}
            <Route path="/system/manage-doctor" component={ManageDoctor} />{" "}
            <Route path="/system/manage-patient" component={ManagePatient} />{" "}
            <Route path="/system/manage-schedule" component={ManageSchedule} />{" "}
            <Route path="/system/doctor-info" component={DoctorInfo} />{" "}
            <Route
              component={() => {
                return <Redirect to={systemMenuPath} />;
              }}
            />{" "}
          </Switch>{" "}
        </div>{" "}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(System);
