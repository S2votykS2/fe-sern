import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";
import "./ManageAdmin.scss";
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
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapShot) {}

  render() {
    return (
      <Fragment>
        <div className=""> Hello world </div>{" "}
        <div className="title"> ADMIN </div>{" "}
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
