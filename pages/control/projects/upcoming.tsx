import React from "react";
import Template from "../../../components/template";

function Blog(): JSX.Element {
  return (
    <Template>
      <div>
        <h1 style={{ textAlign: "center" }}>Planned Projects</h1>
        <p>
          Here are a list of projects I currently have planned for the future:
        </p>

        <h3> Strava Viewer </h3>
        <p>
          Like many other cyclists, I use Strava to keep track of bike rides.
          The Strava Apple Watch App serves as a decently accurate bike computer
          that sits on my wrist and having it log things like heart rate data is
          quite useful. For this project, I aim to create a webapp that allows
          me to view Strava data and rides here on my website. While a Strava
          embed feature does exist, I want to create a ride viewer that is more
          suited to my preferences. To do this, I plan on making use of the
          Strava API and creating a Strava data visualization app in React and
          TypeScript. I really enjoyed working with React and TypeScript when
          developing my website and aim to further develop those skills with
          this project.
        </p>

        <h3> CI/CD Content Management System </h3>
        <p>
          Unlike with my previous website, I decided to add a Blog to my
          website. Normally, it makes the most sense to use something like
          WordPress for hosting blogs but since I'm a CS student, I wanted to
          make my website on my own and use modern frameworks like React. Since
          I haven't set up Continuous Integration/Continuous Deployment (CI/CD)
          yet, I have to manually update my website everytime I want to add a
          new blog post or revise my resume. For making blog posts, this is
          especially annoying since I have to create a new React component and
          format everything in JSX. To remedy this, I plan on implementing CI/CD
          and also creating a Content Management System that can read from
          something like a Google Doc, create a new React component, and
          automatically integrate and deploy my changes.
        </p>
      </div>
    </Template>
  );
}

export default Blog;
