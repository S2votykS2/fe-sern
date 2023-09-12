import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";
import "./ManagePatient.scss";
import index from "toastify";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
// function handleEditorChange({ html, text }) {
//   console.log("handleEditorChange", html, text);
// }

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHTML: "",
      contentText: "",
      doctorName: "",
      description: "",
    };
  }
  handleEditorChange = ({ html, text }) => {
    console.log("Check html", html);
    console.log("Check text", text);
  };
  handleOnClickBtn = () => {
    console.log("Check state:", this.state);
  };
  handleOnChangeDoctor = (event) => {
    console.log("Check doctor", event.target.value);
  };
  handleOnChangeDescription = (event) => {
    console.log("Check description", event.target.value);
  };
  componentDidMount() {
    console.log("Check state", this.state);
  }
  componentDidUpdate(prevProps, prevState, snapShot) {}

  render() {
    return (
      <Fragment>
        <div className="title"> Thêm thông tin bệnh nhân </div>{" "}
        <div className="container mb-10">
          <div className="information">
            <div className="doctor">
              <label className=""> Tên bác sĩ </label>{" "}
              <select
                className=""
                onChange={(event) => this.handleOnChangeDoctor(event)}
              >
                <option value="1" key="">
                  {" "}
                  Bác sí 1{" "}
                </option>{" "}
                <option value="2" key="">
                  {" "}
                  Bác sí 2{" "}
                </option>{" "}
                <option value="3" key="">
                  {" "}
                  Bác sí 3{" "}
                </option>{" "}
              </select>{" "}
            </div>{" "}
            <div className="more-info">
              <label className=""> Miêu tả </label>{" "}
              <input type="" name="" value="" className="" />
            </div>{" "}
          </div>{" "}
          <button
            type=""
            className="btn btn-primary btn-custom"
            onClick={() => this.handleOnClickBtn()}
          >
            {" "}
            Lưu Thông tin{" "}
          </button>{" "}
          <div className="description">
            <label for="" className="">
              {" "}
              Markdown{" "}
            </label>{" "}
            {
              <MdEditor
                className="mt-10"
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={() => this.handleEditorChange}
              />
            }{" "}
          </div>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
