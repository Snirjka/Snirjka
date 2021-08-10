import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';
import PropTypes from 'prop-types';
import { TagGroup } from '../../components/Tags';
import StretchingChild from '../../components/StretchingChild';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './style.scss';

const contacts = [
    { icon: faEnvelope, color: '#DC483C', text: 'snirjka@gmail.com' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/snirkara', color: 'white', text: 'linkedin' },
    { icon: faFacebook, link: 'https://www.facebook.com/snirkara', color: '#3B5998', text: 'facebook' },
]

const ContactOptions = () => {
    return (
        <TagGroup tag='ul'>
            <ul>
                {
                    contacts.map((contact, i) => <ContactLink key={i} {...contact} index={i} />)
                }
            </ul>
        </TagGroup>
    );
}

const ContactLink = ({ link, icon, color, text, index }) => {
    return (
        <TagGroup tag='li'>
            <li className='contact-link'>
                <a style={{ color: color }} target='_blank' rel='noopener noreferrer' href={link}>
                    <FontAwesomeIcon icon={icon} />
                    <span>{text}</span>
                </a>
            </li>
        </TagGroup>
    );
}

ContactLink.propTypes = {
    index: PropTypes.number,
    link: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.any
}

const projectLink = 'https://github.com/snirjka/snirjka.github.io';

const SourceCodeLink = () => {
    const { result, dencrypt } = useDencrypt();
    useEffect(() => {
        dencrypt('VIEW SOURCECODE');
    })
    return (
        <a href={projectLink} className='sourcecode' rel="noopener noreferrer" target="_blank">{result}</a>
    );
};


const Contact = () => {
    return (
        <section className='contact container'>
            <TagGroup tag='html'>
                <TagGroup tag='body'>
                    <TagGroup tag='h1' attr='style="color: #551A8B;"'>
                        <h1><StretchingChild>Contact</StretchingChild></h1>
                    </TagGroup>
                    <ContactOptions />
                    {/* <TagGroup tag='a' attr='href="github.com/snirjka"'>
                        <SourceCodeLink />
                    </TagGroup> */}
                </TagGroup>
            </TagGroup>
        </section>
    );
}

export default Contact;