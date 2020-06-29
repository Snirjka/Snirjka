import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const HeaderLink = ({ icon, text, to }) => <Link to={to} className='header-link'><FontAwesomeIcon icon={icon} /><span>{text}</span></Link>;

const Header = () => {
    return (
        <section className='header'>
            <nav className='container'>
                <ul>
                    <li>
                        <HeaderLink to='about' icon={faUser} text='About' />
                    </li>
                    <li>
                        <HeaderLink to='contact' icon={faPhone} text='Contact' />
                    </li>
                </ul>
                <div>
                    <HeaderLink to='/' icon={faHome} />
                </div>
            </nav>
        </section>
    );
}

export default Header;