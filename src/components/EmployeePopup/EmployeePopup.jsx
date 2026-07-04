import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { closeEmployeePopup } from '../../store/features/popup/popup.slice'
import { postEmployees, upateEmployee } from '../../store/features/employee/employee.thunk'
const EmployeePopup = () => {
    const dispatch=useDispatch()
    const popup=useSelector(state=>state.popup.employeePopup)
     const [formDetails,setFormDetails]=useState({
    profileUrl:'',
    name:'',
    email:'',
    bio:'',
    highlight:false
  })
  const handleInputChange=(e)=>{
      const {name,value}=e.target;
      setFormDetails({
        ...formDetails,
        [name]:value
      })
  }
  const handleSubmit=async()=>{
    if(popup.id){
      await dispatch(upateEmployee({
        id:popup.id,
        details:formDetails
      }))
    }
    else{

      await dispatch(postEmployees(formDetails))
    }
     dispatch(closeEmployeePopup())

  }
  useEffect(()=>{
    if(!popup){
        setFormDetails({
          profileUrl:'',
          name:'',
          email:'',
          bio:'',
          highlight:false
        })
    }
     if(popup.id){
      setFormDetails({
          profileUrl:popup.profileUrl,
          name:popup.name,
          email:popup.email,
          bio:popup.bio,
          highlight:false
      })
     }
  },[popup])


    if(!popup) return null;


  return (
    <div  onClick={()=>dispatch(closeEmployeePopup())} className='fixed top-0 left-0 w-full h-full bg-black/75 z-20 flex items-center justify-center '>
        <fieldset onClick={(e)=>e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
  <h1 className='py-2 text-xl font-semibold'>Employee Details</h1>
   <label className="label">Profile Url</label>
  <input value={formDetails.profileUrl} type="url" name='profileUrl' onChange={handleInputChange} className="input" placeholder="URL" />

     <label className="label">Name</label>
  <input value={formDetails.name} type="text" name='name' onChange={handleInputChange} className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input value={formDetails.email} type="email" name='email' onChange={handleInputChange} className="input" placeholder="Email" />

 <fieldset className="fieldset">
  <legend className="label">Description</legend>
  <textarea value={formDetails.bio} className="textarea h-24" onChange={handleInputChange} name='bio' placeholder="Description"></textarea>
  <div className="label">Optional</div>
</fieldset>

  <button onClick={handleSubmit} className="btn btn-neutral mt-4">Submit</button>
</fieldset>
    </div>
  )
}

export default EmployeePopup