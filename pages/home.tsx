import React from 'react';
import Template from './template';

function Home(): JSX.Element {
    return (
        <Template>
            <div>
                <h1>Welcome!</h1>
                <p> I'm Robert Burris, a current sophomore at the University of Washington studying Computer Science. Here you'll find a collection of my various projects, blog posts, a copy of my resume, and info on where to contact me! <br/> <br/> In the meantime, here's some info about me!</p>
                <ul>
                    <li> <b>Current Work:</b> Undergraduate Researcher in the UW School of Medicine (nerve rehabilitation app development in Flutter) and the Allen School of Computer Science and Engineering (computational biology & machine learning omics research). </li>
                    
                    <li> <b>Current Coursework:</b> Data Structures and Parallelism (CSE332), Hardware/Software Interface (CSE351), System and Software Tools (CSE391), Second Year Accelerated Honors Calculus (MATH334), Bioscientific Vocabularly Building from Latin and Greek Roots (CLAS205)</li>
                    
                    <li><b> Ongoing Projects: </b> Designing a way to view bike rides logged on <a href="https://www.strava.com/athletes/22252948" style={{color: "#1C96DB"}}>Strava</a> on my website, redesigning my website using React, and developing a medical appointment scheduling Telegram/Facebook Messenger bot.</li>    
                </ul>
            </div>
        </Template>
    );
}

export default Home;