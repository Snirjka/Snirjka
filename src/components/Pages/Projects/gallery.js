import React, { Component } from 'react'

export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            viewing: 0,
            animation: 'topIn'
        }
    }

    render() {
        return (
            <div className="gallery lay">
                <div className="viewing">
                    <img className={this.state.animation} alt="" src={`./assets/imgs/projects/${this.props.project.folder}/${this.state.viewing}.png`} />
                </div>
                <div className='img-block'>
                    <ul>
                        {this.props.project && this.props.project.imgs.map((i) =>
                            <li key={i}><img onClick={() => {
                                this.setState({ animation: 'topOut' })
                                setTimeout(() => this.setState({viewing: i, animation: 'topIn' }), 500)
                            }} alt="" className={"to-view " + (this.state.viewing == i ? "chosen" : "")} src={`./assets/imgs/projects/${this.props.project.folder}/${i}.png`} /></li>)}
                    </ul>
                </div>
            </div>
        )
    }
} {/* this.project.map((gallery, i) => <li>
    <img alt="" className='to-view' src="./assets/imgs/projects/task-client/0.png" />
</li>) */}