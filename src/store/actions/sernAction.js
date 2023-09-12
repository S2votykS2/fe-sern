import actionTypes from "./actionTypes";
import {
  getTopDoctorsService,
  getAllDoctorsService,
  saveMarkdown,
  getDetailDoctor,
  getAllSchedules,
  getDoctorSchedule,
} from "../../services/crudService";
import { toast } from "react-toastify";

export const fetchTopDoctor = (limitInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorsService(limitInput);
      console.log("Check res top doctor", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
        });
      }
    } catch (e) {
      toast.error("ERROR");

      dispatch({
        type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};

export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctorsService();
      console.log("Check res", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTOR_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};

export const fetchSaveMarkdown = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveMarkdown(data);
      console.log("Check res", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_SAVE_MARKDOWN_SUCCESS,
          data: res,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_SAVE_MARKDOWN_FAIDED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_SAVE_MARKDOWN_FAIDED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};
export const fetchDetailDoctor = (idInput) => {
  return async (dispatch, getState) => {
    try {
      let res = await getDetailDoctor(idInput);
      console.log("Check res", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DETAIL_DOCTOR_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_DETAIL_DOCTOR_FAILED,
      });
      console.log("FetchPositionStart error", e);
    }
  };
};

export const fetchAllSchedules = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllSchedules();
      console.log("Check res", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_SCHEDULES_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_SCHEDULES_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_ALL_SCHEDULES_FAILED,
      });
      console.log("FetchAllSchedule error", e);
    }
  };
};

export const fetchDetailSchedule = (doctorId, date) => {
  return async (dispatch, getState) => {
    try {
      let res = await getDoctorSchedule(doctorId, date);
      console.log("Check res", res);
      if (res && res.data.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_DETAIL_SCHEDULES_SUCCESS,
          data: res.data.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_DETAIL_SCHEDULES_FAILED,
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_DETAIL_SCHEDULES_FAILED,
      });
      console.log("FetchAllSchedule error", e);
    }
  };
};
