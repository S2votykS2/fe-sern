import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createNewUser, getAllCodeService } from "../../services/crudService";
import { toast } from "react-toastify";
class ModalUser extends Component {
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
      image: "",

      genderArr: [],
      positionArr: [],
      roleArr: [],
    };
  }

  async componentDidMount() {
    let genderArr = await getAllCodeService("gender");
    let positionArr = await getAllCodeService("position");
    let roleArr = await getAllCodeService("role");
    this.setState({
      genderArr: genderArr.data.data,
      positionArr: positionArr.data.data,
      roleArr: roleArr.data.data,
    });
  }
  toggle = () => {
    this.props.toggleFromParent();
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
      // "avatar",
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
  handleAddUser = async () => {
    let isValid = this.checkValidInput();
    if (isValid) {
      let data = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        positionId: this.state.positionId,
        roleId: this.state.roleId,
        // avatar:this.state.avatar,
      };
      await this.props.createUser(data);
      // let response = await createNewUser(data);
      // if (response && response.errMessage !== 0) {
      //   console.log("response:", response);
      //   toast.success("Create success");
      // } else {
      //   toast.error("Create failed");
      // }
    }
  };
  render() {
    // console.log('Check props:', this.props);
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
        <ModalHeader toggle={() => this.toggle()}>
          {" "}
          Create new user{" "}
        </ModalHeader>{" "}
        <ModalBody>
          <div class="container">
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
                    {" "}
                    {this.state.genderArr &&
                      this.state.genderArr.length > 0 &&
                      this.state.genderArr.map((item, index) => {
                        return (
                          <option value={item.keyMap}> {item.valueVI} </option>
                        );
                      })}{" "}
                  </select>{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Position </label>{" "}
                  <select
                    name="positionId"
                    class="form-control"
                    onChange={(event) =>
                      this.handleOnChange(event, "positionId")
                    }
                  >
                    {" "}
                    {this.state.positionArr &&
                      this.state.positionArr.length > 0 &&
                      this.state.positionArr.map((item, index) => {
                        return (
                          <option value={item.keyMap}> {item.valueVI} </option>
                        );
                      })}{" "}
                  </select>{" "}
                </div>{" "}
                <div class="form-group col-md-6">
                  <label for=""> Role </label>{" "}
                  <select
                    name="roleId"
                    class="form-control"
                    onChange={(event) => this.handleOnChange(event, "roleId")}
                  >
                    {" "}
                    {this.state.roleArr &&
                      this.state.roleArr.length > 0 &&
                      this.state.roleArr.map((item, index) => {
                        return (
                          <option value={item.keyMap}> {item.valueVI} </option>
                        );
                      })}{" "}
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
          <Button color="primary" onClick={() => this.handleAddUser()}>
            Add user{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
