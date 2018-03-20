import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className='scrollinger'>
                    <span className='quote html'>&lt;html&gt;</span><br />
                    <span className='quote body'>&lt;body&gt;</span><br />
                    <span className='quote h1'>&lt;h1 style="color: #551A8B;"&gt;</span>
                    <h1><img alt="" className="me" src="assets/imgs/me.jpg" /> About me</h1>
                    <span style={{display: "inline"}} className='quote h1'>&lt;img src="me.png" /&gt;</span>< br/>
                    <span className='quote h1'>&lt;/h1&gt;</span><br />
                    <span className='quote h1'>&lt;p&gt;</span><br />
                    <p>Hello, I am Snir Kara, 23 years old from Israel.<br /><br />
                        In the last couple of years I am studying Programming & web development, <br />
                        and I'm currently working in Groupon. <br />
                        I'm having the most fun working on the client side  - ReactJS | Anuglar >= 2,<br />
                        although i got some experience with backend - Laravel | Nodejs<br /><br />
                        You can check the code to the site<br />
                        <a target='self' href="https://github.com/Snirjka/Snirjka.github.io">HERE!</a><br />
                        Enjoy.
                        </p>
                    <span className='quote h1'>&lt;/p&gt;</span><br />
                    <span className='quote body'>&lt;/body&gt;</span><br />
                    <span className='quote html'>&lt;/html&gt;</span>
                </div>
            </div>
        )
    }
}