
import { useSelector,useDispatch } from 'react-redux'
import { closeDeletePopup } from '../../store/features/popup/popup.slice'
import { deleteEmployee } from '../../store/features/employee/employee.thunk'
const DeletePopup = () => {
    const dispatch=useDispatch()
    const popup=useSelector(state=>state.popup.deletePopup)
    // console.log(popup)
    const handleConfirmation=async()=>{
      await dispatch(deleteEmployee(popup))
    }

    if(!popup) return null;


  return (
    <div  onClick={()=>dispatch(closeDeletePopup())} className='fixed top-0 left-0 w-full h-full bg-black/75 z-20 flex items-center justify-center '>
       <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Delete</h2>
    <p>Are you sure you want to Delete this ? </p>
    <div className="justify-end card-actions mt-8">
      <button className="btn btn-primary" onClick={()=>dispatch(closeDeletePopup)}>NO</button>
      <button className="btn btn-primary" onClick={handleConfirmation}>Yes</button>

    </div>
  </div>
</div>
    </div>
  )
}

export default DeletePopup