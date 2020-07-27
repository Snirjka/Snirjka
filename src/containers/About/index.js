import React, { useContext, useEffect } from 'react';
import TypeIt from 'typeit';
import { TagGroup } from '../../components/Tags';
import StretchingChild from '../../components/StretchingChild';
import { SkillsContext } from '../../contexts/SkillsContext';
import mePNG from '../../assets/images/me.png';
import './style.scss';

const aboutMe = `Hello, my name is Snir Kara, 25 years old from Israel.| 
|
In the last couple of years I am studying programming & web development,|
I got experience in both frontend and backend programming,|
including developing large scale projects, mobile pwa apps,|
fully responsive websites, troubleshooting, and debugging code.|
I am passionate about learning new skills & technolegies.`

const Paragraph = () => {
    useEffect(() => {
        new TypeIt('.paragraph', {
            strings: aboutMe.split('|'),
            speed: 25,
            waitUntilVisible: true
        }).go();
    })
    return (
        <p className='paragraph'></p>
    );
}


const Skills = () => {
    const { skills } = useContext(SkillsContext);
    const numbers = skills.map((s, i) => i).sort(() => Math.random() - 0.5);
    return (
        <section className='skills'>
            <ul>
                {
                    skills.map((skill, i) => {
                        let delay = numbers[i] * 0.25;
                        const style = {
                            backgroundColor: skill.backgroundColor,
                            color: skill.color,
                            animation: `pop 0.25s ease ${delay}s 1 normal forwards`
                        }
                        return (
                            <li key={skill.title} style={style}>
                                <span>{skill.label}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}

const About = () => {
    return (
        <section className='about container'>
            <TagGroup tag='html'>
                <TagGroup tag='body'>
                    <TagGroup tag='h1'>
                        <h1><StretchingChild>About me <img src={mePNG} alt='me' /></StretchingChild></h1>
                    </TagGroup>
                    <TagGroup tag='p'>
                        <Paragraph />
                    </TagGroup>
                    <TagGroup tag='section' attr='class="skills"'>
                        <Skills />
                    </TagGroup>
                </TagGroup>
            </TagGroup>
        </section>
    );
}

export default About;