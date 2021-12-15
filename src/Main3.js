import React,{useState}from 'react';

function Main3(){
        ev.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
    
        fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ imageURL: `http://127.0.0.1:5000/${body.file}` });
          });
        });
      
 
  return (
    <form onSubmit={this.handleUploadImage}>
      <div>
        <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
      </div>
      <div>
        <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
      </div>
      <br />
      <div>
        <button>Upload</button>
      </div>
      <file src={this.state.imageURL} />
    </form>
  );

  }

export default Main3;