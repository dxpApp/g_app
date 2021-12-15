import React,{useState} from "react"
import { FileDrop } from 'react-file-drop';
import MyDropzone from "./MyDropzone"
import axios from "axios"
import { file } from "@babel/types";


function ExcelFile() {
    const [file,setfile]=useState();
    const onChangeFile=(e)=>{
       setfile(e.target.value)
    }
    const uploadFile=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        // axios
        // .post("http://127.0.0.1:5000/",formData )
        // .then(res => console.log(res))
        // .catch(err => console.warn(err));
        axios
        .get("http://127.0.0.1:5000/" )
        .then(res => console.log(res))
        .catch(err => console.warn(err));
      }
    return (
      <div>
        {/* <h1>React File Drop demo</h1>
        <input type="file"></input> */}
        {/* <div style={styles}>
          <FileDrop
            onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
            onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
            onFrameDrop={(event) => console.log('onFrameDrop', event)}
            onDragOver={(event) => console.log('onDragOver', event)}
            onDragLeave={(event) => console.log('onDragLeave', event)}
            onDrop={(files, event) => console.log('onDrop!', files, event)}
          >
            Drop some files here!
          </FileDrop>
        </div> */}
        {/* <MyDropzone/> */}
        <input type="file" name="file" onChange={(e)=>onChangeFile(e)}/>
         <button  onClick={(e)=>{uploadFile(e)}}>submit</button>
        </div>
    );
  }
  
  export default ExcelFile;