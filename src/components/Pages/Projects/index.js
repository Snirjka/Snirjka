import React, { Component } from 'react'

import Overlay from '../../Overlay'
import Gallery from './gallery'

const projects = [
    { name: "Pninei halacha", desc: "A web app Built to religious jewish Yeshiva. you getting tested on religious books and can earn prizes!", folder: 'pninei-halacha', imgs: [0,1,2] },
    { name: "Task client", desc: "The task client is a personal project i was working in the past 3 month. this system helps you manage your organization tasks easily.", folder: 'task-client', imgs: [0,1,2] }
]

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            overlay: false,
            project: null
        }
    }
    viewGallery(obj) {
        this.setState({ overlay: true, project: obj })
    }
    closeGallery() {
        this.setState({ overlay: false, project: null })
    }
    render() {
        return (
            <div className='projects'>
                <Overlay shutOverlay={this.closeGallery.bind(this)} open={this.state.overlay}>
                    {this.state.project ? <Gallery project={this.state.project} /> : ''}
                </Overlay>
                <h1>Recent Projects</h1>
                <div>
                    <ul>
                        {projects.map((project, i) =>
                            <li key={i}>
                                <img alt="" src={'./assets/imgs/projects/' + project.folder + '/0.jpg'} />
                                <button onClick={() => this.viewGallery(project)}>View</button>
                                <span>{project.name}</span>
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}