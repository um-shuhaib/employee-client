import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateEmployee } from '../Api/FetchApi';
import { getEmployee } from '../Api/FetchApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Edit() {


    const [employee,setEmployee]=useState({
        name:"",designation:"",email:"",salery:"" 
    })
    const navigate = useNavigate()
    const {id}=useParams()

    useEffect(()=>{
        getEmployee(id).then((res)=>{
            console.log(res.data);
            
            setEmployee(res.data)
        })
    },[])
console.log(employee);

    const submitData=()=>{
        const {name,designation,email,salery}=employee
        if (!name || !designation || !email || !salery){
            toast("invalid credential")
        }else{
            updateEmployee(id,employee).then((res)=>{
                toast("data updated");
                navigate("/");
            })
        }
        
        

    }

    return (
        <div>
            <div className='container d-flex justify-content-center align-items-center vh-100'>
                <div className='w-100'>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Name"
                        className="mb-3"

                    >
                        <Form.Control type="text" placeholder="name@example.com" value={employee.name} onChange={(e)=>{setEmployee({...employee,name:e.target.value})}}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingDesignation" label="Designation" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" value={employee.designation} onChange={(e)=>{setEmployee({...employee,designation:e.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Email" className='mb-3'>
                        <Form.Control type="email" placeholder="Password" value={employee.email} onChange={(e)=>{setEmployee({...employee,email:e.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSalery" label="salery" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" value={employee.salery} onChange={(e)=>{setEmployee({...employee,salery:e.target.value})}}/>
                    </FloatingLabel>
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <button className='btn btn-warning' onClick={submitData}> Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit