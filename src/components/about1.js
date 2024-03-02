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
    margin: "40px",
    padding: "40px",
    width: "500px",
    backgroundColor: "#E1AFD1",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    marginLeft: "50px"
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

  // State to manage the content and visibility of CSS Working
  const [cssWorkingContent, setCssWorkingContent] = useState("");
  const [cssWorkingVisible, setCssWorkingVisible] = useState(false);
  const [workingContentPosition, setWorkingContentPosition] = useState({ x: 0, y: 0 });

  // Function to handle click on CSS Working link
  const handleCssWorkingClick = (event) => {
    setCssWorkingVisible(!cssWorkingVisible);
    setCssWorkingContent(cssWorkingVisible
      ? ""
      : `CSS Working content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
    const rect = event.target.getBoundingClientRect();
    setWorkingContentPosition({ x: rect.right + 40, y: rect.top });
  };

  // State to manage the content and visibility of CSS Installation
  const [cssInstallationContent, setCssInstallationContent] = useState("");
  const [cssInstallationVisible, setCssInstallationVisible] = useState(false);
  const [installationContentPosition, setInstallationContentPosition] = useState({ x: 0, y: 0 });

  // Function to handle click on CSS Installation link
  const handleCssInstallationClick = (event) => {
    setCssInstallationVisible(!cssInstallationVisible);
    setCssInstallationContent(cssInstallationVisible
      ? ""
      : `CSS Installation content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
    const rect = event.target.getBoundingClientRect();
    setInstallationContentPosition({ x: rect.right + 40, y: rect.top });
  };

  // State to manage the content and visibility of CSS Execution
  const [cssExecutionContext, setCssExecutionContext] = useState("");
  const [cssExecutionVisible, setCssExecutionVisible] = useState(false);
  const [executionContentPosition, setExecutionContentPosition] = useState({ x: 0, y: 0 });

  // Function to handle click on CSS Execution link
  const handleCssExecutionClick = (event) => {
    setCssExecutionVisible(!cssExecutionVisible);
    setCssExecutionContext(cssExecutionVisible
      ? ""
      : `CSS Execution content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
    const rect = event.target.getBoundingClientRect();
    setExecutionContentPosition({ x: rect.right + 40, y: rect.top });
  };

  // State to manage the content and visibility of HTML Page Structure
  const [htmlPageStructureContent, setHtmlPageStructureContent] = useState("");
  const [htmlPageStructureVisible, setHtmlPageStructureVisible] = useState(false);
  const [pageStructureContentPosition, setPageStructureContentPosition] = useState({ x: 0, y: 0 });

  // Function to handle click on HTML Page Structure link
  const handleHtmlPageStructureClick = (event) => {
    setHtmlPageStructureVisible(!htmlPageStructureVisible);
    setHtmlPageStructureContent(htmlPageStructureVisible
      ? ""
      : `HTML Page Structure content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
    const rect = event.target.getBoundingClientRect();
    setPageStructureContentPosition({ x: rect.right + 40, y: rect.top });
  };

  return (
    <>
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
      </ul>

      <div style={divStyle}>
        <div>
          <div style={divin}>
            <a
              href="#"
              onClick={handleCssWorkingClick}
              style={aStyle}
            >
              CSS Working
            </a>
            {cssWorkingVisible && (
              <div style={{ backgroundColor: "#FFFFFF", position: "absolute", top: workingContentPosition.y, left: workingContentPosition.x }}>
                {cssWorkingContent}
              </div>
            )}
            <a
              href="#"
              onClick={handleCssInstallationClick}
              style={aStyle}
            >
              CSS Installation
            </a>
            {cssInstallationVisible && (
              <div style={{ backgroundColor: "#E8FFFF", position: "absolute", top: installationContentPosition.y, left: installationContentPosition.x }}>
                {cssInstallationContent}
              </div>
            )}
            <a
              href="#"
              onClick={handleCssExecutionClick}
              style={aStyle}
            >
              CSS Execution
            </a>
            {cssExecutionVisible && (
              <div style={{ backgroundColor: "#FFE4E1", position: "absolute", top: executionContentPosition.y, left: executionContentPosition.x }}>
                {cssExecutionContext}
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
              <div style={{ backgroundColor: "#F0FFF0", position: "absolute", top: pageStructureContentPosition.y, left: pageStructureContentPosition.x }}>
                {htmlPageStructureContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
