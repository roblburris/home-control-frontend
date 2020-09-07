import React from 'react';
import Template from '../template';
import { Archive } from 'react-feather';
import styles from '../styles.module.css';

function Blog(): JSX.Element {
    return (
        <Template>
            <div>
                <h1>Blog</h1>
                <p>
                    Welcome to my blog! I plan to update this semi-regularly with posts about projects I'm working on, classes I've taken, and anything else of interest. If you're interested in reading more, be sure to click the header to see the full blog post!
                </p>

                <hr style={{borderWidth: 0, height: '1px', color: 'gray', backgroundColor: '#e4e8eb'}} />
                
                <h2 style={{textDecoration: 'underline'}}> <a href='/blog/planned-projects' style={{color: 'black'}}>Planned Projects</a></h2>

                <p>
                   Here are a list of projects I am currently have planned for the future...
                </p>

                <hr style={{borderWidth: 0, height: '1px', color: 'gray', backgroundColor: '#e4e8eb'}} />

                <h2>Project: Revamping my Website</h2>
                <p>
                   This is my first post where I talk about the specifics behind the development process of a project I've completed. For this post, I'll be talking about how I redid my website in React and TypeScript. Compared to a frontend built in HTML/CSS with vanilla JavaScript, I really enjoyed working with React and definitely plan to incoporate it in future projects... 
                </p>

                <hr style={{borderWidth: 0, height: '1px', color: 'gray', backgroundColor: '#e4e8eb'}} />

                <h2>AMATH 301</h2>
                <p>
                    This is a course review of AMATH 301 — Beginning Scientific Computing. I took this class in Summer 2020 with Alanna Gary and was my first class in the Applied Mathematics department here at UW. Overall, I found this to a pretty average class that I've taken at UW (nothing bad, nothing notable) that helped introduce me to the field of Applied Mathematics...
                </p>


            </div>
            
        </Template>
    );
}

export default Blog;