import React, { Component } from 'react'


export default class Entry extends Component {
    render() {
        return (
            <div>
                <div className='welcome'>
                    <div className='slide-div'>
                        <span className='quote html'>&lt;html&gt;</span><br />
                        <span className='quote body'>&lt;body&gt;</span><br />
                        <span className='quote h1'>&lt;h1&gt;</span>
                        <h1>Hi,<br />
                            I'm Snir,<br />
                            Web developer.</h1>
                        <span className='quote h1'>&lt;/h1&gt;</span><br />
                        <span className='quote body'>&lt;/body&gt;</span><br />
                        <span className='quote html'>&lt;/html&gt;</span>
                    </div>
                </div>
            </div>
        )
    }
}