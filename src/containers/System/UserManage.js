import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
} from "../../services/crudService";
import "./UserManage.scss";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { reject } from "lodash";
import { toast } from "react-toastify";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
      isOpenEditModal: false,
      userEdit: {},
    };
  }

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  toggleEditModal = () => {
    this.setState({
      isOpenEditModal: !this.state.isOpenEditModal,
    });
  };

  async componentDidMount() {
    await this.getAllUsersFromApi();
  }
  // Read
  getAllUsersFromApi = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.data.errCode === 0) {
      this.setState(
        {
          arrUsers: response.data.users,
        },
        () => {
          // console.log('State',this.state.users);
        }
      );
    }
    // console.log('Response:', response);
    // console.log('State',this.state.arrUsers);
  };
  // Create
  createNewUserFromApi = async (data) => {
    let response = await createNewUser(data);
    if (response && response.errCode !== 0) {
      console.log("Check response", response);
      this.setState({
        isOpenModal: false,
      });
      await this.getAllUsersFromApi();
      toast.success("Create New User Success");
    } else {
      this.setState({
        isOpenModal: false,
      });
      await this.getAllUsersFromApi();
      toast.error("Create New User Failed");
      this.setState({
        isOpenModal: false,
      });
    }
  };

  handleAddUser = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  // Delete
  handleDeleteUser = async (user) => {
    try {
      if (user) {
        let response = await deleteUser(user.id);
        toast.success("Delete success");
        // console.table(user)
        // console.log('Response:', response);
        await this.getAllUsersFromApi();
      } else {
        toast.error("Delete Fail");
        await this.getAllUsersFromApi();
      }
    } catch (e) {
      toast.success("Update User Failed");
    }
  };
  // Update
  handleUpdateUser = (user) => {
    this.setState({
      isOpenEditModal: !this.state.isOpenEditModal,
      userEdit: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
        positionId: user.positionId,
        roleId: user.roleId,
      },
    });
  };
  doUpdateFromParent = async (user) => {
    try {
      let response = await updateUser(user);
      console.log("response:", response);
      await this.getAllUsersFromApi();
      if (response && response.data.errCode === 0) {
        await this.getAllUsersFromApi();
        toast.success("Update User Success");
        this.setState({
          isOpenModal: false,
        });
        return;
      } else {
        await this.getAllUsersFromApi();
        toast.error("Update User Failed");
        this.setState({
          isOpenModal: false,
        });
      }
    } catch (e) {
      reject(e);
      toast.error("Update User Failed");
      this.setState({
        isOpenModal: false,
      });
    }
  };

  render() {
    let users = this.state.arrUsers;
    // console.log("userEdit:", this.state.userEdit);
    return (
      <>
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleFromParent={this.toggleModal}
          createUser={this.createNewUserFromApi}
        />{" "}
        <ModalEditUser
          isOpen={this.state.isOpenEditModal}
          toggleFromParent={this.toggleEditModal}
          currentUser={this.state.userEdit}
          doUpdateUser={this.doUpdateFromParent}
        />{" "}
        <div className="title"> Table list user </div>{" "}
        <div className="addUser" onClick={() => this.handleAddUser()}>
          {" "}
          <i class="fas fa-plus"> </i>Add new User{" "}
        </div>{" "}
        <table id="customers">
          <tr>
            <th> ID </th> <th> Email </th> <th> FirstName </th>{" "}
            <th> LastName </th> <th> Address </th> <th> PhoneNumber </th>{" "}
            <th> Gender </th> <th> Position </th> <th> Role </th>{" "}
            <th> Action </th>{" "}
          </tr>{" "}
          {users.map((user, index) => {
            return (
              <tr>
                <td> {user.id} </td> <td> {user.email} </td>{" "}
                <td> {user.firstName} </td> <td> {user.lastName} </td>{" "}
                <td> {user.address} </td> <td> {user.phoneNumber} </td>{" "}
                <td> {user.gender} </td> <td> {user.positionId} </td>{" "}
                <td> {user.roleId} </td>{" "}
                <td>
                  <button
                    className="update"
                    onClick={() => this.handleUpdateUser(user)}
                  >
                    <i class="fas fa-user-edit"> </i>{" "}
                  </button>{" "}
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteUser(user)}
                  >
                    {" "}
                    <i class="fas fa-trash"> </i>{" "}
                  </button>{" "}
                </td>{" "}
              </tr>
            );
          })}{" "}
        </table>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
