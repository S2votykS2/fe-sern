import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import "./DoctorInfo.scss";
import {
  getDetailDoctor,
  getAllCodeService,
} from "../../../services/crudService";
import { crudRedux } from "../../../utils";
import { toast } from "react-toastify";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { languages } from "../../../utils";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
// function handleOnChangeMarkdown({ html, text }) {
//   console.log("handleOnChangeMarkdown", html, text);
// }

class DoctorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: crudRedux.CREATE,
      hasData: false,
      doctors: [],
      prices: [],
      payments: [],
      provinces: [],
      doctorId: "",
      description: "",
      price: "",
      payment: "",
      province: "",
      nameClinic: "",
      addressClinic: "",
      note: "",
      count: "",
      contentHTML: "",
      contentMarkdown: "",
    };
  }
  async componentDidMount() {
    this.props.fetchAllDoctor();
    let prices = await getAllCodeService("PRICE");
    if (prices.data && prices.data.errCode === 0) {
      this.setState({
        prices: prices.data.data,
      });
    }
    let payments = await getAllCodeService("PAYMENT");
    if (payments.data && payments.data.errCode === 0) {
      this.setState({
        payments: payments.data.data,
      });
    }
    let provinces = await getAllCodeService("PROVINCE");
    if (provinces.data && provinces.data.errCode === 0) {
      this.setState({
        provinces: provinces.data.data,
      });
    }
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.doctors !== this.props.doctors) {
      this.setState({
        doctors: this.props.doctors,
      });
    }
  }
  //
  handleOnChangeMarkdown = ({ html, text }) => {
    this.setState({
      contentHTML: html,
      contentMarkdown: text,
    });
  };
  handleOnChange = async (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  isValidate = () => {
    let isValid = true;
    let arrValids = [
      "doctorId",
      "description",
      "price",
      "payment",
      "province",
      "nameClinic",
      "addressClinic",
      "note",
      "count",
      "contentHTML",
      "contentMarkdown",
    ];
    for (let i = 0; i < arrValids.length; i++) {
      if (this.state[arrValids[i]] === "") {
        isValid = false;
        toast.error(`Missing ${arrValids[i]}`);
        break;
      }
    }
    // arrValids.forEach((arrValid, index) => {
    //     if (this.state[arrValid] === "") {
    //         isValid = false;
    //         toast.error("Missing required");
    //     }
    // });
    return isValid;
  };
  handleOnClickBtnGet = async () => {
    let res = await getDetailDoctor(this.state.doctorId);
    if (res.data && res.data.errCode === 0) {
      let data = res.data.data;
      console.log("Check data detaildoctor:", data);
      let nameClinic =
        data.DoctorInfoData.nameClinic !== null
          ? data.DoctorInfoData.nameClinic
          : "123";
      console.log("Check nameClinic:", nameClinic);
      console.log("Check nameClinic2:", data.DoctorInfoData.nameClinic);
      this.setState({
        contentHTML:
          data.MarkdownData.contentHTML !== null
            ? data.MarkdownData.contentHTML
            : "",
        contentMarkdown:
          data.MarkdownData.contentMarkdown !== null
            ? data.MarkdownData.contentMarkdown
            : "",
        description:
          data.MarkdownData.description !== null
            ? data.MarkdownData.description
            : "",
        // Bug (select ko reset ve gia tri get) -> fix: them value cho select
        price:
          data.DoctorInfoData.priceId !== null
            ? data.DoctorInfoData.priceId
            : "",
        payment:
          data.DoctorInfoData.paymentId !== null
            ? data.DoctorInfoData.paymentId
            : "",
        province:
          data.DoctorInfoData.provinceId !== null
            ? data.DoctorInfoData.provinceId
            : "",
        nameClinic:
          data.DoctorInfoData.nameClinic !== null
            ? data.DoctorInfoData.nameClinic
            : "",
        addressClinic:
          data.DoctorInfoData.addressClinic !== null
            ? data.DoctorInfoData.addressClinic
            : "",
        note: data.DoctorInfoData.note !== null ? data.DoctorInfoData.note : "",
        count:
          data.DoctorInfoData.count !== null ? data.DoctorInfoData.count : "",
      });
    } else {
      this.setState({
        // contentHTML: "",
        // contentMarkdown: "",
        // description: "",
      });
    }
  };
  handleOnClickBtnSave = () => {
    let isValid = this.isValidate();
    if (isValid === false) {
      return;
    }
    console.log("Check state in btn Save", this.state);
    this.props.fetchSaveMarkdown({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.doctorId,
      payment: this.state.payment,
      price: this.state.price,
      // Bug (select ko reset ve ban dau)
      province: this.state.province,
      nameClinic: this.state.nameClinic,
      addressClinic: this.state.addressClinic,
      note: this.state.note,
      count: this.state.count,
      action: this.state.action,
    });
    this.setState({
      doctorId: "",
      description: "",
      price: "",
      payment: "",
      province: "",
      nameClinic: "",
      addressClinic: "",
      note: "",
      count: "",
      contentHTML: "",
      contentMarkdown: "",
    });
  };

  render() {
    // console.log("Check props", this.props);
    console.log("Check state", this.state);
    let { doctors, prices, payments, provinces } = this.state;
    let language = this.props.language;
    return (
      <Fragment>
        <div className="title"> Thêm thông tin bác sĩ </div>{" "}
        <div className="container mb-10">
          <div className="information">
            <div className="doctor-name">
              <label className=""> Tên bác sĩ </label>{" "}
              <select
                value={this.state.doctorId}
                className=""
                onChange={(event) => this.handleOnChange(event, "doctorId")}
              >
                <option value="" key="">
                  {" "}
                  Chọn bác sĩ{" "}
                </option>{" "}
                {doctors &&
                  doctors.length > 0 &&
                  doctors.map((doctor, index) => {
                    let nameVi = `${doctor.firstName} ${doctor.lastName}`;
                    let nameEn = `${doctor.lastName} ${doctor.firstName}`;
                    return (
                      <option value={doctor.id} key={index}>
                        {" "}
                        {language === languages.VI ? nameVi : nameEn}{" "}
                      </option>
                    );
                  })}{" "}
              </select>{" "}
              <button
                type=""
                className="btn btn-primary"
                onClick={() => this.handleOnClickBtnGet()}
              >
                Lấy thông tin{" "}
              </button>{" "}
            </div>{" "}
            <div className="introduce-info">
              <label className=""> Thông tin giới thiệu </label>{" "}
              <input
                type=""
                name=""
                value={this.state.description}
                className=""
                placeholder=""
                onChange={(event) => this.handleOnChange(event, "description")}
              />{" "}
            </div>{" "}
            <div className="doctor-info">
              <div className="doctor-price">
                <label for="" className="">
                  {" "}
                  Chọn giá{" "}
                </label>{" "}
                <select
                  value={this.state.price}
                  className=""
                  onChange={(event) => this.handleOnChange(event, "price")}
                >
                  <option value="" key="">
                    Chọn{" "}
                  </option>{" "}
                  {prices &&
                    prices.length > 0 &&
                    prices.map((item, index) => {
                      return (
                        <option value={item.keyMap} key={index}>
                          {" "}
                          {language === languages.VI
                            ? item.valueVI
                            : item.valueEN}{" "}
                        </option>
                      );
                    })}{" "}
                </select>{" "}
              </div>{" "}
              <div className="doctor-pay">
                <label for="" className="">
                  {" "}
                  Chọn phương thức thanh toán{" "}
                </label>{" "}
                <select
                  value={this.state.payment}
                  className=""
                  onChange={(event) => this.handleOnChange(event, "payment")}
                >
                  <option value="" key="">
                    Chọn{" "}
                  </option>{" "}
                  {payments &&
                    payments.length > 0 &&
                    payments.map((item, index) => {
                      return (
                        <option value={item.keyMap} key={index}>
                          {" "}
                          {language === languages.VI
                            ? item.valueVI
                            : item.valueEN}{" "}
                        </option>
                      );
                    })}{" "}
                </select>{" "}
              </div>{" "}
              <div className="doctor-province">
                <label for="" className="">
                  {" "}
                  Chọn tỉnh thành{" "}
                </label>{" "}
                <select
                  value={this.state.province}
                  className=""
                  onChange={(event) => this.handleOnChange(event, "province")}
                >
                  <option value="" key="">
                    Chọn{" "}
                  </option>{" "}
                  {provinces &&
                    provinces.length > 0 &&
                    provinces.map((item, index) => {
                      return (
                        <option value={item.keyMap} key={index}>
                          {" "}
                          {language === languages.VI
                            ? item.valueVI
                            : item.valueEN}{" "}
                        </option>
                      );
                    })}{" "}
                </select>{" "}
              </div>{" "}
              <div className="name-clinic">
                <label for="" className="">
                  {" "}
                  Tên phòng khám{" "}
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.nameClinic}
                  className=""
                  onChange={(event) => this.handleOnChange(event, "nameClinic")}
                />{" "}
              </div>{" "}
              <div className="address-clinic">
                <label for="" className="">
                  {" "}
                  Địa chỉ phòng khám{" "}
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.addressClinic}
                  className=""
                  onChange={(event) =>
                    this.handleOnChange(event, "addressClinic")
                  }
                />{" "}
              </div>{" "}
              <div className="note2">
                <label for="" className="">
                  {" "}
                  Lưu ý{" "}
                </label>{" "}
                <input
                  type=""
                  name=""
                  value={this.state.note}
                  className=""
                  onChange={(event) => this.handleOnChange(event, "note")}
                />{" "}
              </div>{" "}
              <div className="count2">
                <label for="" className="">
                  {" "}
                  Số lượng{" "}
                </label>{" "}
                <select
                  value={this.state.count}
                  className=""
                  onChange={(event) => this.handleOnChange(event, "count")}
                >
                  <option value="" key="">
                    Chọn{" "}
                  </option>{" "}
                  <option value="1" key="0">
                    1{" "}
                  </option>{" "}
                  <option value="2" key="1">
                    2{" "}
                  </option>{" "}
                  <option value="3" key="2">
                    3{" "}
                  </option>{" "}
                </select>{" "}
              </div>{" "}
            </div>{" "}
            <button
              type=""
              className="btn btn-primary btn-custom"
              onClick={() => this.handleOnClickBtnSave()}
            >
              {" "}
              Lưu Thông tin{" "}
            </button>{" "}
            <div className="description">
              <label for="" className="">
                {" "}
                Markdown{" "}
              </label>{" "}
              <MdEditor
                className="mt-10"
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={this.handleOnChangeMarkdown}
                value={this.state.contentMarkdown}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    doctors: state.sern.doctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDoctor: () => {
      dispatch(actions.fetchAllDoctor());
    },
    fetchSaveMarkdown: (data) => {
      dispatch(actions.fetchSaveMarkdown(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorInfo);
