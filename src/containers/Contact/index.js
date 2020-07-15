import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';
import PropTypes from 'prop-types';
import { TagName, TagText } from '../../components/Tags';
import StretchingChild from '../../components/StretchingChild';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './style.scss';

const contacts = [
    { icon: faEnvelope, color: '#DC483C', text: 'snirjka@gmail.com' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/snirkara', color: 'white', text: 'Linkedin' },
    { icon: faFacebook, link: 'https://www.facebook.com/snirkara', color: '#3B5998', text: 'Facebook' },
]

const ContactOptions = () => {
    return (
        <TagText tabs={6}>
            <ul>
                {
                    contacts.map((contact, i) => <ContactLink key={i} {...contact} index={i} />)
                }
            </ul>
        </TagText>
    );
}

const ContactLink = ({ link, icon, color, text, index }) => {
    return (
        <li className='contact-link'>
            <TagName br tabs={2}>li</TagName>
            <TagText tabs={4}>
                <a style={{ color: color }} target='_blank' rel='noopener noreferrer' href={link}>
                    <FontAwesomeIcon icon={icon} />
                    <span>{text}</span>
                </a>
            </TagText>
            <TagName br tabs={2}>/li</TagName>
        </li>
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
            <div>
                <TagName br>html</TagName>
                <TagName br tabs={2}>body</TagName>
                <TagName br tabs={4}>h1 style="color: #551A8B;"</TagName>
                <TagText tabs={6}><h1><StretchingChild>Contact</StretchingChild></h1></TagText>
                <TagName br tabs={4}>/h1</TagName>
                <TagName br tabs={4}>ul</TagName>
                <ContactOptions />
                <TagName br tabs={4}>/ul</TagName>
                <TagName br tabs={4}>a href="github.com/snirjka"</TagName>
                <TagText br tabs={6}>
                    <SourceCodeLink />
                </TagText>
                <TagName br tabs={4}>/a</TagName>
                <TagName br tabs={2}>/body</TagName>
                <TagName>/html</TagName>
            </div>
        </section>
    );
}

export default Contact;