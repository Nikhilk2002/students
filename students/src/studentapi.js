import { studentInstance } from "./axiosInstance";



export const studentdata = () => {
    return studentInstance.post('/students');
  };
  