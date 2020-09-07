import React from 'react';
import Template from '../template';

function Blog(): JSX.Element {
    return (
        <Template>
            <div>
                <h1 style={{textAlign: 'center'}}>Project: Revamping my Website</h1>
                <p>
                    This is my first post where I talk about the specifics behind the development process of a project I've completed. Since this was written after I finished my website, I am not as detailed as I would have liked to be when talking about my development process but for future posts I plan to keep a more detailed record of my development. For this post, I'll be talking about how I redid my website in React and TypeScript. Compared to a frontend built in HTML/CSS with vanilla JavaScript, I really enjoyed working with React and definitely plan to incoporate it in future projects. 
                    
                    <h3> Motivation </h3>
                    
                    Me redesigning my website was something I had planned for the past few months but never had a chance to get to due to school, working on other projects, and a lack of time. It was not until the end of UW's 2020 Summer Quarter when I realized that the break between Summer and Autumn quarter was the best time to redo my website in React. Before this, my experience with React was quite limited and before fully diving into internship application season, I wanted to make my website more pretty and add things like React and TypeScript to my resume.
                    
                    <h3> Development </h3>

                    From the beginning I knew I was going to use Next.js for routing. Unfortunately when I started my project, I did not realize that the <code>npx create-next-app --example with-typescript</code> command existed and instead started working out of a standard create-react-app with TypeScript. This would not have been an issue since you can add Next.js to an existing project but for some reason my app stopped working and I had to copy my existing React components to a fresh create-next-app. 

                    <br />
                    <br />

                    Once I did this, everything began running smoothly. Next.js makes routing incredibly easy and with that out of the way, I was able to focus on developing the rest of my website. A big issue on my old website was the lack of a mobile friendly layout. When developing the frontend, I completely forgot to make my website responsive which was a big mistake. Luckily, I did not forget this and implemented a mobile friendly navbar. To do this, I made use of React hooks and followed this helpful <a style={{color: 'black'}} href='https://dev.to/joserfelix/create-a-mobile-friendly-navigation-with-react-4930'> guide</a> on using the hooks with a navbar designed on my own. 
                    
                    Apart from mobile friendly/responsive design, I also changed color themes. I considered implementing a toggle between light/dark mode but ultimately I liked using the blue/white theme. I also switched to having my Resume page be linked to a file instead of an iframe under my website. I couldn't really find/figure out any good ways to embed a PDF in my website (that also looked good on mobile) so having the page link to a PDF was much easier and aesthetically pleasing.
                    
                    <h3> Future Plans </h3>
                    
                    I wanted to get my website updated before the start of September so unfortunately I was not able to add all the features I would have liked. 
                </p>
            </div>
        </Template>
    );
}

export default Blog;