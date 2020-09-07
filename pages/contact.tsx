import React from 'react';
import Template from './template';

function Home(): JSX.Element {
    return (
        <Template>
            <div>
                <h1>Contact Me</h1>
                <p>
                    If you're interested in reaching out, feel free to email or
                    connect on any of my socials below!
                    
                    <ul>
                        <li> <b>Email:</b> <a style={{color: 'black'}}
                        href='mailto:roblburris@gmail.com'> roblburris@gmail.com</a>
                        </li>
                    
                        <li> <b>LinkedIn:</b> <a style={{color: 'black'}}
                        href='https://www.linkedin.com/in/roblburris/'> Robert
                        Burris</a> </li>

                        <li> <b>GitHub:</b> <a style={{color: 'black'}}
                        href='https://www.github.com/roblburris'> roblburris</a> </li>   
                    </ul>
                </p>

            </div>
        </Template>
    );
}

export default Home;