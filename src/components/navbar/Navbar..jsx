import React from 'react'
import Layout from '../layout/layout'
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { openEmployeePopup } from '../../store/features/popup/popup.slice';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
  return (
        <div className='bg-zinc-700 text-white shadow-sm sticky top-0  z-1000'>
    <Layout>

    <div className="navbar ">

  <div className="navbar-start">
    <a className="btn btn-ghost text-white text-xl">daisyUI</a>
  </div>
  <div className="navbar-end">
    <button onClick={()=>dispatch(openEmployeePopup())} className="btn text-white btn-ghost btn-circle">
      <FaPlus />
       </button>
    <button onClick={()=>navigate('/like')}  className="btn text-white btn-ghost btn-circle">
           <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>

    </button>
  </div>
</div>
    </Layout>
        </div>


  )
}

export default Navbar