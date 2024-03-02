import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#AD88C6",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const divin = {
    margin: "20px",
    padding: "20px",
    width: "1100px",
    backgroundColor: "#E1AFD1",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  };

  const aStyle = {
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    backgroundColor: "#E1AFD1",
    display: "block",
    textDecoration: "none",
    color: "#000",
    borderRadius: "5px",
    textAlign: "center",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  };

  // State to manage the content and visibility of HTML Introduction
  const [htmlIntroductionContent, setHtmlIntroductionContent] = useState("");
  const [htmlIntroductionVisible, setHtmlIntroductionVisible] = useState(false);

  // State to manage the content and visibility of HTML Working
  const [htmlWorkingContent, setHtmlWorkingContent] = useState("");
  const [htmlWorkingVisible, setHtmlWorkingVisible] = useState(false);

  // State to manage the content and visibility of HTML Installation
  const [htmlInstallationContent, setHtmlInstallationContent] = useState("");
  const [htmlInstallationVisible, setHtmlInstallationVisible] = useState(false);

  // State to manage the content and visibility of HTML Execution
  const [htmlExecutionContext, setHtmlExecutionContext] = useState("");
  const [htmlExecutionVisible, setHtmlExecutionVisible] = useState(false);

  // State to manage the content and visibility of HTML Page Structure
  const [htmlPageStructureContent, setHtmlPageStructureContent] = useState("");
  const [htmlPageStructureVisible, setHtmlPageStructureVisible] = useState(false);

  // Function to handle click on HTML Introduction link
  const handleHtmlIntroductionClick = () => {
    setHtmlIntroductionVisible(!htmlIntroductionVisible);
    setHtmlIntroductionContent(htmlIntroductionVisible
      ? ""
      : `The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.' 'Hypertext' refers to the linking of text with other documents, while 'markup language' denotes a language that utilizes a specific set of tags.

Thus, HTML is the practice of displaying text, graphics, audio, video etc. in a certain way using special tags.`);
  };

  // Function to handle click on HTML Working link
  const handleHtmlWorkingClick = () => {
    setHtmlWorkingVisible(!htmlWorkingVisible);
    setHtmlWorkingContent(htmlWorkingVisible
      ? ""
      : `Hello World`);
  };

  // Function to handle click on HTML Installation link
  const handleHtmlInstallationClick = () => {
    setHtmlInstallationVisible(!htmlInstallationVisible);
    setHtmlInstallationContent(htmlInstallationVisible
      ? ""
      : `The installation of HTML is not required as it is a markup language interpreted by web browsers. However, you may need a text editor or an integrated development environment (IDE) to write HTML code.`);
  };

  // Function to handle click on HTML Execution link
  const handleHtmlExecutionClick = () => {
    setHtmlExecutionVisible(!htmlExecutionVisible);
    setHtmlExecutionContext(htmlExecutionVisible
      ? ""
      : `The execution of HTML involves the rendering of HTML documents by web browsers. Browsers parse HTML code and display the content according to the defined structure and formatting.`);
  };

  // Function to handle click on HTML Page Structure link
  const handleHtmlPageStructureClick = () => {
    setHtmlPageStructureVisible(!htmlPageStructureVisible);
    setHtmlPageStructureContent(htmlPageStructureVisible
      ? ""
      : `HTML documents follow a hierarchical structure known as the Document Object Model (DOM). The structure consists of elements arranged in a tree-like manner, with each element representing a specific part of the document.`);
  };
  const ulStyle = {
    color: "red", // Change the font color
    fontSize: "20px", // Change the font size
    listStyle:'none',
    margintop:'5px'
  };

  return (
    <>
      <ul style={ulStyle}>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
      </ul>

      <div style={divStyle}>
        <div>
          <div style={divin}>
            <a
              href="#"
              onClick={handleHtmlIntroductionClick}
              style={aStyle}
            >
              HTML Introduction
            </a>
            {htmlIntroductionVisible && (
              <div style={{ backgroundColor: "#FFFFFF" }}>
                {htmlIntroductionContent}
              </div>
            )}
            <a
              href="#"
              onClick={handleHtmlWorkingClick}
              style={aStyle}
            >
              HTML Working
            </a>
            {htmlWorkingVisible && (
              <div style={{ backgroundColor: "#FFFFFF" }}>
                {htmlWorkingContent}
              </div>
            )}
            <a
              href="#"
              onClick={handleHtmlInstallationClick}
              style={aStyle}
            >
              HTML Installation
            </a>
            {htmlInstallationVisible && (
              <div style={{ backgroundColor: "#FFFFFF" }}>
                {htmlInstallationContent}
              </div>
            )}
            <a
              href="#"
              onClick={handleHtmlExecutionClick}
              style={aStyle}
            >
              HTML Execution
            </a>
            {htmlExecutionVisible && (
              <div style={{ backgroundColor: "#FFFFFF" }}>
                {htmlExecutionContext}
              </div>
            )}
            <a
              href="#"
              onClick={handleHtmlPageStructureClick}
              style={aStyle}
            >
              HTML Page Structure
            </a>
            {htmlPageStructureVisible && (
              <div style={{ backgroundColor: "#FFFFFF" }}>
                {htmlPageStructureContent}
              </div>
            )}
            {/* Add other HTML links here */}
          </div>
        </div>
        {/* Content to display to the right of the web page */}
        <div>{/* Add content here */}</div>
      </div>
    </>
  );
}
