import React, { useState, useRef, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function CreateEventForm() {
  const category = useRef();
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const verify = 'promotersIntl'; 
  const navigate = useNavigate(); 
  useEffect(() => {
    if (Cookies.get('auth') !== verify) navigate('/'); 
  
  }, []);
  
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };
  
  const handleUpload = async () => {
    if (files.length > 0 && title !== "" && description !== "" && category.current.value !== "") {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category",category.current.value); 
      // some sanitization on the input
      const imageExts = ["jpeg", "png", "gif", "WebP", "jpg"];
      let flag = false;
      formData.getAll("files").forEach((element) => {
        if (imageExts.includes(element.name.split(".")[1])) flag = true;
      });

      if (!flag) {
        alert("please select at least one image file to be the cover photo");
      } else {
        try {
          await axios.post("https://api-promoters-intl.onrender.com/create-event", formData, {  withCredentials: true})
          .then((res)=>{
            console.log(res);
          });
          alert("Files uploaded successfully!");
        } catch (error) {
          alert("Error uploading the files.");
          console.log(error);
        }
      }
    } else {
      alert("all fields are requiered");
      if (category.current.value === '') console.log('category isn not select'); 
      if (title === '') console.log('title is not set'); 
      if (description === '') console.log('descriptioion is not set'); 
    }
  };

  return (
    <div>
      <label style={{ display: "block" }}>add event photos</label>
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileChange}
      />
      <label style={{ display: "block" }}>title</label>

      <input
        type="text"
        style={{ display: "block" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label style={{ display: "block" }}>description</label>

      <input
        type="text"
        style={{ display: "block" }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
     <div>
      <select ref={category}>
        <option value="">Select a Category</option>
        <option value="CONCERTS">CONCERTS</option>
        <option value="CORPORATE">CORPORATE EVENTS</option>
        <option value="CONFERENCES">CONFERENCES</option>
        <option value="ACTIVATIONS">ACTIVATIONS</option>
      </select>
    </div>
      <button onClick={handleUpload}>Upload</button>
      <button style={{marginLeft: "10px"}}><Link to={"/admin-dashboard"} style={{ textDecoration: "none",color: "black" }}>
        return to dashboard
      </Link></button>
    </div>
  );
}

export default CreateEventForm;
