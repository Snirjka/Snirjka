import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { barObjects } from '../utility'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className='nav-size'>
                    <ul>
                        {barObjects.map((obj, i) =>
                            <Link key={i} to={"/" + obj.name}><li><i className={`fa ${obj.icon}`} aria-hidden="true"></i>{obj.name}</li></Link>
                        )}
                    </ul>
                    <div className='brand'>
                        {/* <Link to="/">&copy; Snir Kara</Link> */}
                        <Link to="/"><i className={`fa fa-home`} aria-hidden="true"></i></Link>
                    </div>
                </div>
            </nav>
        )
    }
}
