import actionTypes from "../actions/actionTypes";

const initialState = {
  topDoctors: [],
  doctors: [],
  detailDoctor: [],
  schedules: [],
  doctorSchedule: [],
};

const sernReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOP_DOCTOR_SUCCESS:
      state.topDoctors = action.data;
      // console.log("Check action success", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTOR_FAILED:
      state.topDoctors = [];
      // console.log("Check action failed", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
      state.doctors = action.data;
      // console.log("Check action success", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_FAILED:
      state.doctors = [];
      // console.log("Check action failed", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS:
      state.detailDoctor = action.data;
      // console.log("Check action success", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_DETAIL_DOCTOR_FAILED:
      state.detailDoctor = [];
      // console.log("Check action failed", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_SCHEDULES_SUCCESS:
      state.schedules = action.data;
      // console.log("Check action success", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_SCHEDULES_FAILED:
      state.schedules = [];
      // console.log("Check action failed", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_DETAIL_SCHEDULES_SUCCESS:
      state.doctorSchedule = action.data;
      // console.log("Check action success", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_DETAIL_SCHEDULES_FAILED:
      state.doctorSchedule = [];
      // console.log("Check action failed", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default sernReducer;
