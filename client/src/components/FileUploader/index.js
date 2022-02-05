import './Style.css';
import { useState } from 'react';
import axios from 'axios';
import {toast} from'react-toastify';
export const FileUploader=({}) => {
  const[file,setFile]=useState(null)
 const onInputChange=(e)=>{
  setFile(e.target.files[0])
 };
 const onSubmit=(e)=>{
   e.preventDefault();
   const data= new FormData();
   data.append('file',file);
   axios.post('//localhost:8000/upload',data)
   .then((e)=>{
     toast.success('Upload Success')
   })
   .catch((e)=>{
toast.error('Upload Error')
   })

 };
  return(
  <form   method="post" action="#" id="form-id" type="application/.pdf"onSubmit={onSubmit}>          
  <div className="form-group files">
    <label><h3>UPLOAD CLEARNCE</h3> </label>
    <input id="input-id"
    onChange={onInputChange}
    className="form-control" 
    type="file" 
    accept="application/pdf, application/vnd.ms-excel" />
  <button>upload</button>
  </div>
</form> )

  
};