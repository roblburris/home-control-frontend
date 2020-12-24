import React from "react";
import Template from "../components/template";

const Info: React.FC = () => {
  return (
    <Template>
      <div>
        <h1>Project Information</h1>
        <p>
          This project was built by Robert Burris and Nicholas Saroiu. If you're interested in learning more about the project click on the links below!
          <ul>
           <li>
            <b> Source Code: </b>
            <ul>
              <li>
                {" "}
                <a style={{ color: "black" }} href="https://github.com/roblburris/home-control-frontend">
                  {" "}
                Frontend
                </a>
              </li>
              <li>
                {" "}
                <a style={{ color: "black" }} href="https://github.com/roblburris/home-control-frontend">
                  {" "}
                Backend
                </a>
              </li>
            </ul>
           </li>


            <li>
              {" "}
              
              <a
                style={{ color: "black" }}
                href="http://www.roblburris.com/"
              >
                {" "}
                Writeup
              </a>{" "}
            </li>
          </ul>
        </p>
      </div>
    </Template>
  );
}

export default Info;
