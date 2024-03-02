import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Home() {
  const [fdata, setFdata] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [msg, setMsg] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
      if (res.data === "success") {
        setMsg("Data inserted successfully");
        console.log("Data inserted successfully");
        alert("Data inserted successfully");
      } else {
        setMsg("Data not inserted");
        console.log("Data not inserted");
        alert("Data not inserted");
      }
    });
  };

  const ulStyle = {
    backgroundColor: "",
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: "0",
    marginTop: "40px",
  };

  const listItemStyle = {
    margin: "0 170px", // Add space between list items
    color: "red",
    display:'flex',
    color:'red'
  };

  const contentStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
    color:'#070F2B'
  };
  const link={
display:'flex',
color:'red'
  }
  const divStyle={
    display:'flex',
    marginTop:'10px',
    width:'1500px',
    height:'100px',
    backgroundColor:'#B2B377',
    borderRadius:'7px',
    color:'red'
  }
  return (
    <>
    <div style={divStyle}>
      <ul style={ulStyle}>
        
        <li style={listItemStyle}>
          
          <Link key="home-link" to={{ pathname: "/" }}>Home</Link>
        </li>
        <li style={listItemStyle}>
          <Link key="" to={{ pathname: "/about" }}>HTML</Link>
        </li>
        <li style={listItemStyle}>
          <Link key="javascript-link" to={{ pathname: "/about1" }}>CSS</Link>
        </li>
        <li style={listItemStyle}>
          <Link key="python-link" to={{ pathname: "/about2" }}>JS</Link>
        </li>
        
      </ul>
      </div>
      <div style={contentStyle}>
        <h2>Welcome to My Website</h2>
        <p>This is some content about the website.</p>
        <img src="https://www.dynamicpixel.co.in/blog/wp-content/uploads/2022/02/elearning.png" alt="eLearning" />
      </div>
    </>
  );
}

export default Home;
