import React, { Component } from 'react'

const contacts = [
    { icon: 'fa-envelope', link: null, color: '#DC483C', info: 'Snirjka@gmail.com' },
    { icon: 'fa-linkedin-square', link: 'https://www.linkedin.com/in/snir-kara-044016132/', color: 'white', info: 'Profile' },
    { icon: 'fa-facebook-square', link: 'https://www.facebook.com/snirkara', color: '#3B5998', info: 'Profile' },
]

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <span className='quote html'>&lt;html&gt;</span><br />
                <span className='quote body'>&lt;body&gt;</span><br />
                <span className='quote h1'>&lt;h1 style="color: #551A8B;"&gt;</span>
                <h1>Contact</h1>
                <span className='quote h1'>&lt;/h1&gt;</span><br />
                <span className='quote h1'>&lt;ul&gt;</span><br />
                <div className="contact-ways">
                    {contacts.map((contact, i) => <div style={{animation: `leftShow ${1+(i * 0.5)}s`}}>
                        <span className='quote li'>&lt;li&gt;</span>               
                        <i style={{ color: contact.color }} className={`fa ${contact.icon}`} aria-hidden='true'></i>
                        <a target='blank' href={contact.link} style={{ color: contact.color }}>{contact.info}</a>
                        <span className='quote li'>&lt;/li&gt;</span><br />                
                    </div>)}
                </div>
                <span className='quote h1'>&lt;/ul&gt;</span><br />                
                <span className='quote body'>&lt;/body&gt;</span><br />
                <span className='quote html'>&lt;/html&gt;</span>
            </div>
        )
    }
}