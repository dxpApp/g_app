import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import "./DragDropd.css";
import {CircularProgress} from "@material-ui/core"

const fileTypes = ["vnd.openxmlformats-officedocument.spreadsheetml.sheet","xls"];

 function DragDrop(){
  const [file, setFile] = useState(null);
  const [data,setdata]=useState(null);
  const[enable,setEnable]=useState(true);
  const[enableLoading,setEnableLoading]=useState(true);
  const handleChange = file => {
    console.log(file);
    setFile(file);
    setEnable(!enable);
    setEnableLoading(!enableLoading)
    
   
  };
  const typeError=e=>{
    console.log(e);
    console.log(fileTypes);
  }
  const create_db=(ev)=>{
    ev.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('filename', file.name);
    console.log(file);
    axios.post('http://localhost:5000/upload', //proxy url
    data).then(function (response) {
       console.log(response);
       setdata(response.data)
       
    }).catch((err)=>console.log(err));
  
}
  return (
 <div>
    <div >
      <h4>drag and drop file</h4>
      <FileUploader 
        handleChange={handleChange} 
        name="file" 
        types={fileTypes}
        onTypeError={typeError}
        classes="fileup"
    />
    <button id="btn_create" onClick={create_db} disabled={enable}>create new database</button>
    <div disabled={enableLoading}>
      <CircularProgress/>
    </div>
    {data?(<span>{data}</span>):""} 
   </div>
 </div>
  
  );
  }
export default DragDrop;