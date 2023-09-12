import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { CommonUtils } from "../../../utils";
import { getAllCodeService } from "../../../services/crudService";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import { crudRedux } from "../../../utils/constant";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CrudRedux.scss";
import TableUser from "./TableUser";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImgURL: "",
      isOpen: false,
      isUploadImage: false,
      isOpenPreview: false,

      userId: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "",
      positionId: "",
      roleId: "",
      avatar: "",

      action: crudRedux.CREATE,
    };
  }

  async componentDidMount() {
    // Fire action
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    // try{
    //     let res = await getAllCodeService('gender');
    //     if(res && res.data.errCode === 0)
    //     {
    //         this.setState({
    //             genderArr:res.data.data
    //         })
    //     }
    // }
    // catch(e){
    //     reject(e);

    // }
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.genderArr !== this.props.genderArr) {
      this.setState({
        genderArr: this.props.genderArr,
        // gender:
        //   this.props.genderArr && this.props.genderArr.length > 0
        //     ? this.props.genderArr[1].keyMap
        //     : "",
      });
    }
    if (prevProps.positionArr !== this.props.positionArr) {
      this.setState({
        positionArr: this.props.positionArr,
        // positionId:
        //   this.props.positionArr && this.props.positionArr.length > 0
        //     ? this.props.positionArr[1].keyMap
        //     : "",
      });
    }
    if (prevProps.roleArr !== this.props.roleArr) {
      this.setState({
        roleArr: this.props.roleArr,
        // roleId:
        //   this.props.roleArr && this.props.roleArr.length > 0
        //     ? this.props.roleArr[1].keyMap
        //     : "",
      });
    }
    if (prevProps.users !== this.props.users) {
      // Reset blank input
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        gender:
          this.props.genderArr && this.props.genderArr.length > 0
            ? this.props.genderArr[0].keyMap
            : "",
        positionId:
          this.props.positionArr && this.props.positionArr.length > 0
            ? this.props.positionArr[0].keyMap
            : "",
        roleId:
          this.props.roleArr && this.props.roleArr.length > 0
            ? this.props.roleArr[0].keyMap
            : "",
        avatar: "",
        previewImgURL: "",
        isUploadImage: "",
      });
    }
  }
  handleUpdateUserFromParent = (data) => {
    let buffer = data.image;
    let imageBase64 = "";
    if (buffer) {
      imageBase64 = new Buffer(buffer, "base64").toString("binary");
      console.log("Check imageBase64:", imageBase64);
      // let json = JSON.stringify(buffer);
      // let bufferOriginal = Buffer.from(JSON.parse(json).data);
      // imageBase64 = bufferOriginal.toString("utf8");
      // console.log("Check imageBase64:", imageBase64);
    }
    this.setState({
      userId: data.id,
      email: data.email,
      password: "HARDCODE",
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      positionId: data.positionId,
      roleId: data.roleId,
      // avatar: data.image,
      previewImgURL: imageBase64,
      action: crudRedux.UPDATE,
    });
  };
  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        // console.log("Check state:", this.state);
      }
    );
  };
  handleOnchangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      console.log("Check file", file);
      console.log("Check base64", base64);
      let objectUrl = URL.createObjectURL(file); //Đường link URL
      this.setState({
        previewImgURL: objectUrl,
        // avatar: file,
        avatar: base64,
      });
    }
    if (this.setState.previewImgURL !== "") {
      this.setState({
        isUploadImage: true,
      });
    }
  };

  checkValidInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
      "gender",
      "positionId",
      "roleId",
      //   "avatar",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        toast.error(`Missing ${arrInput[i]} required`);
        break;
      }
    }
    return isValid;
  };

  handleOnclickSave = () => {
    let isValid = this.checkValidInput();
    if (isValid === false) {
      return;
    }
    if (this.state.action === crudRedux.CREATE) {
      // fire action create
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
        avatar: this.state.avatar,
      };
      console.log("Check data create:", data);

      this.props.createUserStart(data);
    }
    if (this.state.action === crudRedux.UPDATE) {
      // fire action update
      let dataUpdate = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        positionId: this.state.positionId,
        roleId: this.state.roleId,
        avatar: this.state.avatar,
      };
      this.props.updateUserStart(dataUpdate);
      console.log("Check data update:", dataUpdate);
      this.setState({
        action: crudRedux.CREATE,
      });
    }
  };

  handlePreviewImage = () => {
    if (this.state.previewImgURL !== "") {
      this.setState({
        isOpenPreview: true,
      });
    }
  };
  render() {
    let { genderArr, positionArr, roleArr } = this.state;
    let language = this.props.language;
    // console.log("Check props from redux:", this.props);
    // console.log("Check state:", this.state);
    return (
      <Fragment>
        <div className="title"> React - Redux: CRUD User </div>{" "}
        <div className="redux-body">
          <div className="container">
            <div className="row">
              <div className="col-12 my-3">
                <FormattedMessage id="crudredux.add" />
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.email" />
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.email}
                  className="form-control"
                  disabled={this.state.action === crudRedux.UPDATE}
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "email");
                  }}
                />{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.password" />
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.password}
                  className="form-control"
                  disabled={this.state.action === crudRedux.UPDATE}
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "password");
                  }}
                />{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.firstname" />
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.firstName}
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "firstName");
                  }}
                />{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.lastname" />
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.lastName}
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "lastName");
                  }}
                />{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.phonenumber" />
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.phoneNumber}
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "phoneNumber");
                  }}
                />{" "}
              </div>{" "}
              <div className="col-9">
                <label for="" className="">
                  <FormattedMessage id="crudredux.address" />
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.address}
                  className="form-control"
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "address");
                  }}
                />{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.gender" />
                </label>{" "}
                <select
                  className="form-control"
                  value={this.state.gender}
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "gender");
                  }}
                >
                  {" "}
                  {genderArr &&
                    genderArr.length > 0 &&
                    genderArr.map((gender, index) => {
                      return (
                        <option value={gender.keyMap} key={index} selected>
                          {" "}
                          {language === "vi"
                            ? gender.valueVI
                            : gender.valueEN}{" "}
                        </option>
                      );
                    })}{" "}
                </select>{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.position" />
                </label>{" "}
                <select
                  className="form-control"
                  value={this.state.positionId}
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "positionId");
                  }}
                >
                  {" "}
                  {positionArr &&
                    positionArr.length > 0 &&
                    positionArr.map((position, index) => {
                      return (
                        <option value={position.keyMap} key="" selected>
                          {" "}
                          {language === "vi"
                            ? position.valueVI
                            : position.valueEN}{" "}
                        </option>
                      );
                    })}{" "}
                </select>{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.role" />
                </label>{" "}
                <select
                  className="form-control"
                  value={this.state.roleId}
                  onChange={(event) => {
                    this.handleOnchangeInput(event, "roleId");
                  }}
                >
                  {" "}
                  {roleArr &&
                    roleArr.length > 0 &&
                    roleArr.map((role, index) => {
                      return (
                        <option value={role.keyMap} key="" selected>
                          {" "}
                          {language === "vi" ? role.valueVI : role.valueEN}{" "}
                        </option>
                      );
                    })}{" "}
                </select>{" "}
              </div>{" "}
              <div className="col-3">
                <label for="" className="">
                  <FormattedMessage id="crudredux.avatar" />
                </label>{" "}
                <div className="avatar">
                  <input
                    type="file"
                    name=""
                    value=""
                    id="uploadImg"
                    className="uploadImg"
                    hidden
                    onChange={(event) => {
                      this.handleOnchangeImage(event);
                    }}
                  />{" "}
                  <label for="" className="" htmlFor="uploadImg" id="">
                    Tải ảnh lên <i class="fas fa-upload"> </i>{" "}
                  </label>{" "}
                  <div
                    className="previewImage"
                    style={{
                      backgroundImage: `url(${this.state.previewImgURL})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "centre",
                      backgroundSize: "contain",
                    }}
                    onClick={() => this.handlePreviewImage()}
                  >
                    {" "}
                  </div>{" "}
                  <div className="isUpload">
                    {" "}
                    {this.state.isUploadImage === true
                      ? "Upload success!"
                      : ""}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <button
              type=""
              className={
                this.state.action === crudRedux.CREATE
                  ? "btn btn-primary mt-4"
                  : "btn btn-warning mt-4"
              }
              onClick={() => {
                this.handleOnclickSave();
              }}
            >
              <FormattedMessage
                id={
                  this.state.action === crudRedux.CREATE
                    ? "crudredux.create"
                    : "crudredux.update"
                }
              />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {this.state.isOpenPreview && (
          <Lightbox
            mainSrc={this.state.previewImgURL}
            onCloseRequest={() => this.setState({ isOpenPreview: false })}
          />
        )}{" "}
        <TableUser
          handleUpdateUserFromChild={this.handleUpdateUserFromParent}
        />{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderArr: state.crudredux.genders,
    positionArr: state.crudredux.positions,
    roleArr: state.crudredux.roles,
    users: state.crudredux.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => {
      dispatch(actions.fetchGenderStart());
    },
    getPositionStart: () => {
      dispatch(actions.fetchPositionStart());
    },
    getRoleStart: () => {
      dispatch(actions.fetchRoleStart());
    },
    createUserStart: (data) => {
      dispatch(actions.createUserStart(data));
    },
    updateUserStart: (data) => {
      dispatch(actions.updateUserStart(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
