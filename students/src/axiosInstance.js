import axios from "axios";

const studentInstance= axios.create({
  baseURL: "http://localhost:8000/"
});

// studentInstance.interceptors.request.use((request) => {
//   const token = localStorage.getItem("jwt");
//   return request;
// });


export { studentInstance};

