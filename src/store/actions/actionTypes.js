const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //admin
  ADMIN_LOGIN_SUCCESS: "ADMIN_LOGIN_SUCCESS",
  ADMIN_LOGIN_FAIL: "ADMIN_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",

  // Load dong data with redux
  FETCH_GENDER_START: "FETCH_GENDER_START",
  FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
  FETCH_GENDER_FAILED: "FETCH_GENDER_FAILED",

  FETCH_POSITION_START: "FETCH_POSITION_START",
  FETCH_POSITION_SUCCESS: "FETCH_POSITION_SUCCESS",
  FETCH_POSITION_FAILED: "FETCH_POSITION_FAILED",

  FETCH_ROLE_START: "FETCH_ROLE_START",
  FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
  FETCH_ROLE_FAILED: "FETCH_ROLE_FAILED",

  //crud-redux
  // 1>Create
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAILED: "CREATE_USER_FAILED",
  // 2>Read
  READ_USER_SUCCESS: "READ_USER_SUCCESS",
  READ_USER_FAILED: "READ_USER_FAILED",
  // 3>Update
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILED: "UPDATE_USER_FAILED",
  // 4>Delete
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAILED: "DELETE_USER_FAILED",

  // SERN
  FETCH_TOP_DOCTOR_SUCCESS: "FETCH_TOP_DOCTOR_SUCCESS",
  FETCH_TOP_DOCTOR_FAILED: "FETCH_TOP_DOCTOR_FAILED",

  FETCH_ALL_DOCTORS_SUCCESS: "FETCH_ALL_DOCTORS_SUCCESS",
  FETCH_ALL_DOCTORS_FAILED: "FETCH_ALL_DOCTORS_FAILED",

  FETCH_SAVE_MARKDOWN_SUCCESS: "FETCH_SAVE_MARKDOWN_SUCCESS",
  FETCH_SAVE_MARKDOWN_FAIDED: "FETCH_SAVE_MARKDOWN_FAIDED",

  FETCH_DETAIL_DOCTOR_SUCCESS: "FETCH_DETAIL_DOCTOR_SUCCESS",
  FETCH_DETAIL_DOCTOR_FAILED: "FETCH_DETAIL_DOCTOR_FAILED",

  FETCH_ALL_SCHEDULES_SUCCESS: "FETCH_ALL_SCHEDULES_SUCCESS",
  FETCH_ALL_SCHEDULES_FAILED: "FETCH_ALL_SCHEDULES_FAILED",

  FETCH_DETAIL_SCHEDULES_SUCCESS: "FETCH_DETAIL_SCHEDULES_SUCCESS",
  FETCH_DETAIL_SCHEDULES_FAILED: "FETCH_DETAIL_SCHEDULES_FAILED",
});

export default actionTypes;
