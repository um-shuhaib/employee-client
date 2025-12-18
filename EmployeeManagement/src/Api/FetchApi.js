import commonApi from "./commonApi";

export const listEmployee=()=>{
    return commonApi("http://127.0.0.1:8000/employee/","GET","")
}

export const deleteEmp=(id)=>{
    return commonApi(`http://127.0.0.1:8000/employee/${id}/`,"DELETE","")
}

export const addEmployee=(data)=>{
    return commonApi("http://127.0.0.1:8000/employee/","POST",data)
}

export const getEmployee=(id)=>{
    return commonApi(`http://127.0.0.1:8000/employee/${id}/`,"GET","")
}

export const updateEmployee=(id,data)=>{
    return commonApi(`http://127.0.0.1:8000/employee/${id}/`,"PUT",data)
}