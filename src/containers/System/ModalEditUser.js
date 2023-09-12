import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getAllCodeService } from "../../services/crudService";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "",
      positionId: "",
      roleId: "",
      // avatar:""
    };
  }
  componentDidUpdate() {}

  async componentDidMount() {
    // let user = await this.props.currentUser;
    // console.log("Check User:", user);
    // if (user) {
    //   this.setState({
    //     email: user.email,
    //     password: "hardcode",
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     address: user.address,
    //     phoneNumber: user.phoneNumber,
    //     gender: user.gender,
    //     positionId: user.positionId,
    //     roleId: user.roleId,
    //   });
    // }
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleGetData = () => {
    let user = this.props.currentUser;
    console.log("Check User:", user);
    if (user) {
      this.setState({
        email: user.email,
        password: "hardcode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
        positionId: user.positionId,
        roleId: user.roleId,
      });
    }
  };

  handleOnChange = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
    console.log("Check Onchange:", copyState);
  };
  checkValidInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "gender",
      "positionId",
      "roleId",
      // "avatar"
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert(`Missing ${arrInput[i]} required`);
        break;
      }
    }
    return isValid;
  };
  handleUpdateUser = async () => {
    let isValid = this.checkValidInput();
    if (isValid) {
      let data = this.state;
      console.log("Data Update:", data);
      this.props.doUpdateUser(data); //la 1 method
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        gender: "",
        positionId: "",
        roleId: "",
      });
    }
  };
  render() {
    // console.log("Check props:", this.props);
    // console.log('check State', this.state);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"className"}
        size="lg"
        centered
        // backdrop={backdrop}
        // keyboard={keyboard}
      >
        <ModalHeader toggle={() => this.toggle()}> Update user </ModalHeader>{" "}
        <ModalBody>
          <div class="container">
            <button
              type=""
              className="btn btn-primary"
              onClick={() => this.handleGetData()}
            >
              {" "}
              Lấy dữ liệu{" "}
            </button>{" "}
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for=""> Email </label>{" "}
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    disabled
                    onChange={(event) => this.handleOnChange(event, "email")}
                  />{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Password </label>{" "}
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    disabled
                    onChange={(event) => this.handleOnChange(event, "password")}
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div class="form-group">
                <label for=""> First name </label>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(event) => this.handleOnChange(event, "firstName")}
                />{" "}
              </div>{" "}
              <div class="form-group">
                <label for=""> Last name </label>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  name="lastName"
                  value={this.state.lastName}
                  onChange={(event) => this.handleOnChange(event, "lastName")}
                />{" "}
              </div>{" "}
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for=""> Address </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={(event) => this.handleOnChange(event, "address")}
                  />{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Phone number </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={(event) =>
                      this.handleOnChange(event, "phoneNumber")
                    }
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for=""> Gender </label>{" "}
                  <select
                    name="gender"
                    class="form-control"
                    onChange={(event) => this.handleOnChange(event, "gender")}
                  >
                    <option value="F"> Male </option>{" "}
                    <option value="M"> Famale </option>{" "}
                    <option value="O"> Other </option>{" "}
                  </select>{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Position </label>{" "}
                  <select
                    name="positionId"
                    class="form-control"
                    onChange={(event) => this.handleOnChange(event, "position")}
                  >
                    <option value="P0"> Bác sĩ </option>{" "}
                    <option value="P1"> Thạc sĩ </option>{" "}
                    <option value="P2"> Tiến sĩ </option>{" "}
                    <option value="P3"> Phó giáo sư </option>{" "}
                    <option value="P4"> Giáo sư </option>{" "}
                  </select>{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Role </label>{" "}
                  <select
                    name="roleId"
                    class="form-control"
                    onChange={(event) => this.handleOnChange(event, "role")}
                  >
                    <option value="R1"> Doctor </option>{" "}
                    <option value="R2"> Patient </option>{" "}
                    <option value="R3"> Admin </option>{" "}
                  </select>{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Image </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    name="image"
                    value={this.state.image}
                    onChange={(event) => this.handleOnChange(event, "image")}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </form>{" "}
          </div>{" "}
        </ModalBody>{" "}
        <ModalFooter>
          <Button color="primary" onClick={() => this.handleUpdateUser()}>
            Update{" "}
          </Button>{" "}
          {""}{" "}
          <Button color="secondary" onClick={() => this.toggle()}>
            Cancel{" "}
          </Button>{" "}
        </ModalFooter>{" "}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
