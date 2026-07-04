import React, { useState } from 'react'
import Layout from '../layout/layout'
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { openDeletePopup, openEmployeePopup } from '../../store/features/popup/popup.slice';
import { getEmployees, upateEmployee } from '../../store/features/employee/employee.thunk';
const Employee = () => {
  // ye wala employee jo hume s.employee defined kiya hai ye store wala
  const employees=useSelector(s=>s.employee.employees)


  return (
    <Layout>

    <ul className="list bg-base-100 rounded-box">
      {
        employees.map((details)=>(

          <EmployeeCard key={details.id} details={details} />
        ))
      }


</ul>
    </Layout>

  )
}

const EmployeeCard=({details})=>{
    const dispatch=useDispatch()

    const handleHighlight=(details)=>{
      dispatch(upateEmployee({
        id:details.id,
        details:{
          ...details,
          highlight:!details.highlight
        }
      })
    )
    // dispatch(getEmployees())
  }
    return (
        <li className="list-row">
    <div><img className="size-10 rounded-box" src={details.profileUrl}/></div>
    <div>
      <div>{details.name}</div>
      <div className="text-xs font-semibold opacity-60">{details.email}</div>
      <div className="text-sm  font-semibold opacity-60">{details.bio}</div>

    </div>
    <button onClick={()=>dispatch(openEmployeePopup(details))} className="btn btn-square btn-ghost">
        <MdEdit className="text-xl" />
       </button>

         <button onClick={()=>dispatch(openDeletePopup(details.id))} className="btn btn-square btn-ghost">
            <MdDeleteOutline className="text-xl" />
       </button>
    <button className="btn btn-square btn-ghost " onClick={()=>handleHighlight(details)}>
      <svg   className={`size-[1.4em] ${
        details.highlight
          ? "text-red-500 animate-jelly"
          : "text-gray-500"
      }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round"  strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path fill={details.highlight ? 'red' : 'none'} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>


    )
}

export default Employee

