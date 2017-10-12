import React, { Component } from 'react'

export default class Overlay extends Component {
    shutOverlay(e) {
        if (e.target === e.currentTarget) {
            this.props.shutOverlay()
        }
    }
    render() {
        return (
            <div onClick={this.shutOverlay.bind(this)} className={"overlay " + (this.props.open ? "open" : "")}>
                {this.props.children}
            </div>
        )
    }
}