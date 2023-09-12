import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as actions from "../../../../store/actions";
import { toast } from "react-toastify";
import { languages } from "../../../../utils";
import {
  getDoctorSchedule,
  getAllDoctorsService,
} from "../../../../services/crudService";
import "./BookingModal.scss";
import { values } from "lodash";

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      phoneNumber: "",
      birth: "",
      address: "",
      reason: "",
    };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapShot) {}

  handleOnChange = (event, id) => {};
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChange = (event, id) => {
    console.log("Check value ", event.target.value);
    console.log("Check id ", id);
    let datas = ["name", "gender", "phoneNumber", "birth", "address", "reason"];
    datas.forEach((data) => {
      if (data === id) {
        this.setState({
          data: event.target.value,
        });
      }
    });
  };
  handleBooking = () => {
    alert("click booking");
  };
  render() {
    // console.log("Check props:", this.props);
    console.log("Check state:", this.state);
    let { language } = this.props;
    let isOpen = this.props.isOpenFromParent;
    let time = this.props.timeFromParent;
    console.log("check time", time);
    return (
      <Fragment>
        <Modal
          isOpen={isOpen}
          // isOpen={this.props.isOpen}
          toggle={() => this.toggle()}
          className=""
          size="lg"
          centered
          // backdrop={backdrop}
          // keyboard={keyboard}
        >
          <ModalHeader toggle={() => this.toggle()}>
            {" "}
            Đặt lịch khám{" "}
          </ModalHeader>{" "}
          <ModalBody>
            <div class="container">
              <form>
                <div class="form-row">
                  <div class="form-group col-9">
                    <label for=""> Họ tên bệnh nhân </label>{" "}
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Họ tên bệnh nhân"
                      value={this.state.name}
                      onChange={(event) => this.handleOnChange(event, "name")}
                    />{" "}
                  </div>{" "}
                  <div class="form-group col-3">
                    <label for=""> Giới tính </label>{" "}
                    <select
                      onClick={(event) => this.handleOnChange(event, "gender")}
                    >
                      <option value="1" key="">
                        {" "}
                        Nam{" "}
                      </option>{" "}
                      <option value="2" key="">
                        {" "}
                        Nữ{" "}
                      </option>{" "}
                    </select>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="form-group">
                  <label for=""> Số điện thoại </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value={this.state.phoneNumber}
                    onChange={(event) =>
                      this.handleOnChange(event, "phoneNumber")
                    }
                  />{" "}
                </div>{" "}
                <div class="form-group">
                  <label for=""> Ngày sinh </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value={this.state.birth}
                    onChange={(event) => this.handleOnChange(event, "birth")}
                  />{" "}
                </div>{" "}
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for=""> Address </label>{" "}
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.address}
                      onChange={(event) =>
                        this.handleOnChange(event, "address")
                      }
                    />{" "}
                  </div>{" "}
                  <div class="form-group col-md-6">
                    <label for=""> Lý do khám bệnh </label>{" "}
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.reason}
                      onChange={(event) => this.handleOnChange(event, "reason")}
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </ModalBody>{" "}
          <ModalFooter>
            <Button color="primary" onClick={() => this.handleBooking()}>
              Booking{" "}
            </Button>{" "}
            {""}{" "}
            <Button color="secondary" onClick={() => this.toggle()}>
              Cancel{" "}
            </Button>{" "}
          </ModalFooter>{" "}
        </Modal>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
