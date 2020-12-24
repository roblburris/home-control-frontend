import React from "react";
import ControlTemplate from "../../components/ControlTemplate";
import LEDControl from "../../components/LEDControl";
import Template from "../../components/template";

const Blog: React.FC = () => {

  return (
    <ControlTemplate>
      <div>
        <h1>Control</h1>
        <p>
          add control header with different options here
        </p>
        <LEDControl />
      </div>
    </ControlTemplate>
  );
}

export default Blog;
