import React from "react";
import Template from "./utils/template";
import LedState from "./utils/Ledstate";

const Home: React.FC = () => {
  return (
    <Template>
      <div>
        <LedState />
      </div>
    </Template>
  );
}

export default Home;
