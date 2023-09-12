import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../../services/crudService";
import { toast } from "react-toastify";

// Load dong data with redux
// Gender
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.data.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
      console.log("FetchGenderStart error", e);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});
// Position
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("position");
      if (res && res.data.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
      console.log("FetchPositionStart error", e);
    }
  };
};
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED,
});
// Role
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("role");
      if (res && res.data.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
      console.log("FetchRoleStart error", e);
    }
  };
};
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

// 1>Create
export const createUserStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUser(data);
      console.log("Res create:", res);
      if (res && res.data.errCode === 0) {
        dispatch(createUserSuccess());
        // Reset table
        dispatch(readUserStart());
        toast.success("Create success new user");
      } else {
        dispatch(createUserFailed());
        toast.error("Create failed new user");
      }
    } catch (e) {
      dispatch(createUserFailed());
      toast.error("Create failed new user");
    }
  };
};
export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});
export const createUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED,
});

// 2>READ
export const readUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers();
      if (res && res.data.errCode === 0) {
        console.log("Res read:", res);
        dispatch(readUserSuccess(res.data.users.reverse()));
      } else {
        dispatch(readUserFailed());
      }
    } catch (e) {
      dispatch(readUserFailed());
      console.log("FetchRoleStart error", e);
    }
  };
};
export const readUserSuccess = (users) => ({
  type: actionTypes.READ_USER_SUCCESS,
  data: users,
});
export const readUserFailed = () => ({
  type: actionTypes.READ_USER_SUCCESS,
});
// 3>Update
export const updateUserStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await updateUser(data);
      console.log("Res update:", res);
      if (res && res.data.errCode === 0) {
        dispatch(updateUserSuccess());
        // Reset table
        dispatch(readUserStart());
        toast.success("Update success new user");
      } else {
        dispatch(updateUserFail());
        toast.error("Update failed new user");
      }
    } catch (e) {
      dispatch(updateUserFail());
      toast.error("Update failed new user");
    }
  };
};
export const updateUserSuccess = () => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
});
export const updateUserFail = () => ({
  type: actionTypes.UPDATE_USER_FAILED,
});

// 4>Delete
export const deleteUserStart = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUser(userId);
      if (res && res.data.errCode === 0) {
        console.log("Res delete:", res);
        dispatch(deleteUserSuccess());
        dispatch(readUserStart());
        toast.success("Delete success new user");
      } else {
        dispatch(deleteUserFailed());
        toast.error("Delete failed new user");
      }
    } catch (e) {
      dispatch(deleteUserFailed());
      toast.error("Delete failed new user");
    }
  };
};
export const deleteUserSuccess = (Users) => ({
  type: actionTypes.READ_USER_SUCCESS,
  data: Users,
});
export const deleteUserFailed = () => ({
  type: actionTypes.READ_USER_SUCCESS,
});
