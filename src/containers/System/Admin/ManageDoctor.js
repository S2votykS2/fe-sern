import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import "./ManageDoctor.scss";
import { getDetailDoctor } from "../../../services/crudService";
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
// function handleEditorChange({ html, text }) {
//   console.log("handleEditorChange", html, text);
// }

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHTML: "",
      contentMarkdown: "",
      doctorId: "",
      description: "",
      hasData: false,
      action: crudRedux.CREATE,
      doctors: [],
    };
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentHTML: html,
      contentMarkdown: text,
      hasData: true,
    });
  };
  handleOnChangeDoctor = async (event) => {
    this.setState({
      doctorId: event.target.value,
      hasData: true,
    });
  };
  handleOnChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
      hasData: true,
    });
  };
  handleOnClickBtnSave = () => {
    this.props.fetchSaveMarkdown({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.doctorId,
      action: this.state.action,
    });
  };
  handleOnClickBtnGet = async () => {
    let res = await getDetailDoctor(this.state.doctorId);
    console.log("Check response detail doctor:", res);
    console.log("Check state", this.state);
    if (
      res &&
      res.data &&
      res.data.data &&
      res.data.data.MarkdownData &&
      res.data.data.MarkdownData.contentHTML &&
      res.data.data.MarkdownData.contentMarkdown &&
      res.data.data.MarkdownData.description
    ) {
      this.setState({
        contentHTML: res.data.data.MarkdownData.contentHTML,
        contentMarkdown: res.data.data.MarkdownData.contentMarkdown,
        description: res.data.data.MarkdownData.description,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
      });
    }
  };

  componentDidMount() {
    this.props.fetchAllDoctor();
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.doctors !== this.props.doctors) {
      this.setState({
        doctors: this.props.doctors,
      });
    }
  }

  render() {
    // console.log("Check props", this.props);
    // console.log("Check state", this.state);
    let doctors = this.state.doctors;
    let language = this.props.language;
    return (
      <Fragment>
        <div className="title"> Thêm thông tin bác sĩ </div>{" "}
        <div className="container mb-10">
          <div className="information">
            <div className="doctor">
              <label className=""> Tên bác sĩ </label>{" "}
              <select
                className=""
                onChange={(event) => this.handleOnChangeDoctor(event)}
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
                        {language === languages.VI ? nameVi : nameEn}{" "}
                      </option>
                    );
                  })}{" "}
              </select>{" "}
              <button
                type=""
                className="btn btn-primary btn-custom"
                onClick={() => this.handleOnClickBtnGet()}
              >
                {" "}
                Lấy thông tin{" "}
              </button>{" "}
            </div>{" "}
            <div className="more-info">
              <label className=""> Miêu tả </label>{" "}
              <input
                type=""
                name=""
                value={this.state.description}
                className=""
                placeholder=""
                onChange={(event) => this.handleOnChangeDescription(event)}
              />{" "}
            </div>{" "}
          </div>{" "}
          {this.state.hasData === true && (
            <button
              type=""
              className="btn btn-primary btn-custom"
              onClick={() => this.handleOnClickBtnSave()}
            >
              {" "}
              Lưu Thông tin{" "}
            </button>
          )}{" "}
          <div className="description">
            <label for="" className="">
              {" "}
              Markdown{" "}
            </label>{" "}
            <MdEditor
              className="mt-10"
              style={{ height: "500px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.contentMarkdown}
            />{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
