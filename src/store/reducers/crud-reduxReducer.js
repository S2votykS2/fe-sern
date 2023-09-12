import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  positions: [],
  users: [],
};

const crudReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    // Load dong data with redux
    // Gender
    case actionTypes.FETCH_GENDER_START:
      // console.log("fired START", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.data;
      // console.log("fired SUCCESS", action);
      return {
        ...copyState,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      copyState.genders = [];
      // console.log("Failed", action);
      return {
        ...state,
      };

    // Position
    case actionTypes.FETCH_POSITION_START:
      // console.log("fired START", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_SUCCESS:
      state.positions = action.data;
      // console.log("fired SUCCESS", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_FAILED:
      state.positions = [];
      // console.log("Failed", action);
      return {
        ...state,
      };

    // Role
    case actionTypes.FETCH_ROLE_START:
      // console.log("fired START", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roles = action.data;
      // console.log("fired SUCCESS", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_FAILED:
      state.roles = [];
      // console.log("Failed", action);
      return {
        ...state,
      };

    // CRUD redux
    // 1>Create
    // 2>Read
    case actionTypes.READ_USER_SUCCESS:
      // console.log("fired SUCCESS", action);
      state.users = action.data;
      return {
        ...state,
      };

    case actionTypes.READ_USER_FAILED:
      // console.log("Failed", action);
      state.users = [];
      return {
        ...state,
      };

    default:
      return state;
  }
  // 3>Update
  // 4>Delete
};
export default crudReduxReducer;
