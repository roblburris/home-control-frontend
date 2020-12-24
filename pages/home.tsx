import React from "react";
import Template from "../components/template";

const Home: React.FC = () => {
  return (
    <Template>
      <div>
        <h1>Welcome!</h1>
        <p>
          This website serves as the frontend for a seamless way to control LEDs and other devices on located throughout your home. To get started, visit the control page to select an available device and proceed from there! If interested in the development process, feel free to visit Robert's website for a detailed writeup. In short, this project uses a HTTP server built in Go to handle requests from the React/TypeScript frontend. Depending on the device, the Go backend processes the received data and then sends it to the device. In the case of the LED strips, the Go backend writes data to serial which is then read by an Arduino connected to a Raspberry Pi that is locally hosting the server.
        </p> 
      </div>
    </Template>
  );
}

export default Home;
