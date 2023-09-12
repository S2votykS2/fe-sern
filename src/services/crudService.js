import axios from "axios";
// Read
let getAllUsers = (inputId) => {
  return axios.get(`http://localhost:8080/api/read?id=${inputId}`, {
    data: {
      id: inputId,
    },
  });
};
// let getAllUsers2 = async(inputId) => {
//         const response = await fetch(`http://localhost:8080/api/read?id=${inputId}`);
//         return await response.json();
//     } ko dung dc fetch dau
// Create
let createNewUser = (dataInput) => {
  return axios.post("http://localhost:8080/api/create", {
    // data: {
    email: dataInput.email,
    password: dataInput.password,
    firstName: dataInput.firstName,
    lastName: dataInput.lastName,
    address: dataInput.address,
    phoneNumber: dataInput.phoneNumber,
    gender: dataInput.gender,
    positionId: dataInput.positionId,
    roleId: dataInput.roleId,
    image: dataInput.avatar,
    // },
  });
};
// Delete
let deleteUser = (userId) => {
  return axios.delete("http://localhost:8080/api/delete", {
    data: {
      email: userId,
    },
  });
};

//Update
let updateUser = (dataInput) => {
  return axios.put("http://localhost:8080/api/update", {
    email: dataInput.email,
    passwordFake: dataInput.password,
    firstName: dataInput.firstName,
    lastName: dataInput.lastName,
    address: dataInput.address,
    phoneNumber: dataInput.phoneNumber,
    gender: dataInput.gender,
    positionId: dataInput.positionId,
    roleId: dataInput.roleId,
    image: dataInput.avatar,
  });
};
// Crud with Redux
// Load allcode
let getAllCodeService = (inputData) => {
  return axios.get(`http://localhost:8080/api/allcode?type=${inputData}`, {
    type: inputData,
  });
};

// SERN
let getTopDoctorsService = (limitInput) => {
  return axios.get(
    `http://localhost:8080/api/top-doctor-home?limit=${limitInput}`,
    {
      limit: limitInput,
    }
  );
};

let getAllDoctorsService = () => {
  return axios.get("http://localhost:8080/api/get-all-doctors");
};

let saveMarkdown = (data) => {
  return axios.post("http://localhost:8080/api/save-markdown", {
    doctorId: data.doctorId,
    description: data.description,
    price: data.price,
    payment: data.payment,
    province: data.province,
    nameClinic: data.nameClinic,
    addressClinic: data.addressClinic,
    note: data.note,
    count: data.count,
    contentHTML: data.contentHTML,
    contentMarkdown: data.contentMarkdown,
    action: data.action,
  });
  // KB phai trung nhau giua key va key cua data voi req.body, con voi req.query thi k can trung
};

let getDetailDoctor = (inputId) => {
  return axios.get(
    `http://localhost:8080/api/get-detail-doctor?id=${inputId}`,
    {
      id: inputId,
    }
  );
};

let getAllSchedules = () => {
  return axios.get("http://localhost:8080/api/get-all-schedules");
};

let bulkCreateSchedules = (data) => {
  return axios.post("http://localhost:8080/api/bulk-create-schedules", {
    data: data,
  });
};

let getDoctorSchedule = (doctorId, date) => {
  return axios.get(
    `http://localhost:8080/api/get-doctor-schedule?doctorId=${doctorId}&date=${date}`,
    {
      doctorId: doctorId,
      date: date,
    }
  );
};
let getDoctorAddress = (id) => {
  return axios.get(`http://localhost:8080/api/get-doctor-info?id=${id}`, {
    id: id,
  });
};

export {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
  getAllCodeService,
  getTopDoctorsService,
  getAllDoctorsService,
  saveMarkdown,
  getDetailDoctor,
  getAllSchedules,
  bulkCreateSchedules,
  getDoctorSchedule,
  getDoctorAddress,
};
