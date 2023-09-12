import React, { Component } from "react";
import { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { reject } from "lodash";
import * as actions from "../../../store/actions";
import { toast } from "react-toastify";
import "./TableUser.scss";
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
function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    this.props.readUserStart();
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.users !== this.props.users) {
      this.setState({
        users: this.props.users,
      });
    }
  }
  handleDeleteUser = (user) => {
    this.props.deleteUserStart(user.id);
  };
  handleUpdateUser = (user) => {
    this.props.handleUpdateUserFromChild(user);
    // Fire update Action (Chua den fire)
    // this.props.updateUserStart(user);
  };
  render() {
    // console.log("Check props:", this.props);
    // console.log("Check state:", this.state);
    let users = this.state.users;
    return (
      <Fragment>
        <div className="container mt-10">
          <div className="title"> List User </div>{" "}
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> 1. Id </th> <th scope="col"> 2.Email </th>
                <th scope="col"> 3. FirstName </th>{" "}
                <th scope="col"> 4. LastName </th>{" "}
                <th scope="col"> 5. Address </th>{" "}
                <th scope="col"> 6. PhoneNumber </th>{" "}
                <th scope="col"> 7. Gender </th>{" "}
                <th scope="col"> 8. Position </th>{" "}
                <th scope="col"> 9. Role </th> <th scope="col"> 11. Action </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {users &&
                users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <tr>
                      <th scope="row"> {user.id} </th> <td> {user.email} </td>{" "}
                      <td> {user.firstName} </td> <td> {user.lastName} </td>{" "}
                      <td> {user.address} </td> <td> {user.phoneNumber} </td>{" "}
                      <td> {user.gender} </td> <td> {user.positionId} </td>{" "}
                      <td> {user.roleId} </td>{" "}
                      <td>
                        <span
                          type=""
                          className="mr-10"
                          onClick={() => this.handleUpdateUser(user)}
                        >
                          <i
                            className="fad fa-pencil-alt"
                            style={{
                              padding: "5px",
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            }}
                          ></i>{" "}
                        </span>{" "}
                        <span
                          type=""
                          className="ml-10"
                          onClick={() => this.handleDeleteUser(user)}
                        >
                          <i
                            className="fas fa-trash"
                            style={{
                              padding: "5px",
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            }}
                          ></i>{" "}
                        </span>{" "}
                      </td>{" "}
                    </tr>
                  );
                })}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    users: state.crudredux.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    readUserStart: () => {
      dispatch(actions.readUserStart());
    },
    deleteUserStart: (userId) => {
      dispatch(actions.deleteUserStart(userId));
    },
    updateUserStart: (data) => {
      dispatch(actions.updateUserStart(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
