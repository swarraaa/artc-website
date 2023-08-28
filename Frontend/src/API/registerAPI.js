import axios from 'axios';

export const createNewStudent = async(data1) => {
    const res = await axios.post("http://localhost:5000/register/", data1);
    return res;
}
export const verifyOTP = async(data1) => {
    const res=await axios.patch("http://localhost:5000/register/",data1);
    return res;
}
export const getAllRegisteredStudents = async() => {
    const res=await axios.get("http://localhost:5000/register/getAllRegisteredStudents");
    return res;
}

export const updateStudent = async(id,truthvalue) => {
    const res=await axios.patch(`http://localhost:5000/register/updateTask/${id}/${truthvalue}`);
    return res;
}
