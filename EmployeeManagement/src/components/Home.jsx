import React from 'react'
import { Link } from 'react-router-dom'
import { listEmployee } from '../Api/FetchApi'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteEmp } from '../Api/FetchApi'
import { toast } from 'react-toastify'

function Home() {

    const navigate=useNavigate()

    const [employee, setEmployee] = useState([])
    useEffect(() => {
        listEmployee().then((res) => {
            
            setEmployee(res.data)

        })
    }, [])
    console.log(employee);

    const deleteEmployee=(id)=>{
        deleteEmp(id).then((res)=>{
            // alert("alert")
            toast("deleted")
        })


    }


    return (
        <div>
            <div>
                <div className='container vh-100 d-flex justify-content-center align-items-center'>
                    <table className='table table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESIGNATION</th>
                                <th>EMAIL</th>
                                <th>SALERY</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                        employee.length > 0 ?
                            employee.map((emp)=>(
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.email}</td>
                                <td>{emp.salery}</td>
                                <td>
                                    <Link to={'edit/${emp.id}'} className='btn btn-primary'>Update</Link>
                                    <Link onClick={()=>{deleteEmployee(emp.id)}} className='btn btn-Danger'>Delete</Link>
                                </td>
                            </tr>
                            ))
                            : 
                            <tr>
                                <td>No data</td>
                            </tr>
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home