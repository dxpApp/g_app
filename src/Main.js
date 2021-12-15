// import React,{useState} from "react" 
// import FileUpload from "./FileUpload"
// import axios from "axios"


// function Main() {
//     const [myfile, setMyfile] = useState({});
//     uploadFile=(ev)=> {
//       ev.preventDefault();
  
//       const data = new FormData();
//       data.append('file', this.uploadInput.files[0]);
//       data.append('filename', this.fileName.value);
  
//       fetch('http://127.0.0.1:5000/upload', {
//         method: 'POST',
//         body: data,
//       }).then((response) => {
//         response.json().then((body) => {
//           return <span>{body}</span>
//         });
//       });
//     }
//       // const updateUploadedFiles = (file) =>
//       //   setNewUserInfo(file);
//       // const handleSubmit = (event) => {
//       //   event.preventDefault();
//       //   //logic to create new user...
//       // };
//       // const uploadFile=(e)=>{
//       //   e.preventDefault();
//       //   console.log(newUserInfo);
//       //   const formData = new FormData();
//       //   formData.append("file", newUserInfo[0]);
//       //   console.log(formData);
//       //   // axios
//       //   // .post("http://127.0.0.1:5000/",formData )
//       //   // .then(res => console.log(res))
//       //   // .catch(err => console.warn(err));
//       //   axios
//       //   .post("http://127.0.0.1:8000/" ,formData,
          
//       //      )
//       //   .then(res => console.log(res))
//       //   .catch(err => console.warn(err));
//       // }
//       return (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <FileUpload
//               accept=".xlsx,.xls,.csv"
//               label="Profile Excel"
//               updateFilesCb={updateUploadedFiles}
//             />
//             <button type="submit" onClick={(e)=>uploadFile(e)}>Create New Database</button>
//           </form>
//         </div>
//       );
// }

// export default Main;