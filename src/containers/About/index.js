import React from 'react';
import { TagName, TagText } from '../../components/Tags';
import mePNG from '../../assets/images/me.png';
import './style.scss';

const aboutMe = `Hello, my name is Snir Kara, 25 years old from Israel.<br /><br />
In the last couple of years I am studying programming & web development,<br />
I got experience in both front end and back end programming,<br />
including developing large scale projects, mobile pwa apps,<br />
fully responsive websites, troubleshooting, and debugging code.<br />
I am passionate about learning new skills & technolegies.`

const skills = [
    { label: 'HTML', title: 'HTML', backgroundColor: '#E86229', color: 'white' },
    { label: 'CSS3', title: 'CSS3', backgroundColor: '#3596D0', color: 'white' },
    { label: 'SASS', title: 'SASS', backgroundColor: '#B95D87', color: 'white' },
    { label: 'LESS', title: 'LESS', backgroundColor: '#2A4C80', color: 'white' },
    { label: 'JS', title: 'Javascript', backgroundColor: '#F0D91D', color: 'white' },
    { label: 'TS', title: 'Typescript', backgroundColor: '#0077C6', color: 'white' },
    { label: 'React', title: 'React', backgroundColor: '#51BCD8', color: 'white' },
    { label: 'Redux', title: 'Redux', backgroundColor: '#7C41BF', color: 'white' },
    { label: 'Nextjs', title: 'Nextjs', backgroundColor: '#000000', color: 'white' },
    { label: 'Angular', title: 'Angular', backgroundColor: '#D6002F', color: 'white' },
    { label: 'Rxjs', title: 'Rxjs', backgroundColor: '#E00D8E', color: 'white' },
    { label: 'Nodejs', title: 'Nodejs', backgroundColor: '#6EAD23', color: 'white' },
    { label: 'Express', title: 'Express', backgroundColor: '#151515', color: 'white' },
    { label: 'MySQL', title: 'MySQL', backgroundColor: '#E08A2D', color: 'white' },
    { label: 'Mongo', title: 'MongoDB', backgroundColor: '#5FA951', color: 'white' },
    { label: 'Flutter', title: 'Flutter', backgroundColor: '#0158A0', color: 'white' },
    { label: 'Git', title: 'Git', backgroundColor: '#F64B3E', color: 'white' },
    { label: 'Jira', title: 'Jira', backgroundColor: '#2580F8', color: 'white' },
];
const Skills = () => {
    return (
        <section className='skills'>
            <ul>
                {
                    skills.map((skill, i) => {
                        const style = {
                            backgroundColor: skill.backgroundColor,
                            color: skill.color,
                            animation: `pop 0.25s ease ${i * 0.5}s 1 normal forwards`
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
            <div>
                <TagName br>html</TagName>
                <TagName br tabs={2}>body</TagName>
                <TagName br tabs={4}>h1 style="color: #551A8B;"</TagName>
                <TagText tabs={6}><h1>About me <img src={mePNG} alt='me' /></h1></TagText>
                <TagName br tabs={4}>/h1</TagName>
                <TagName br tabs={4}>p</TagName>
                <TagText br tabs={6}>
                    <p dangerouslySetInnerHTML={{ __html: aboutMe }} />
                </TagText>
                <TagName br tabs={4}>/p</TagName>
                <TagName br tabs={4}>section class="skills"</TagName>
                <TagText br tabs={6}>
                    <Skills />
                </TagText>
                <TagName br tabs={4}>/section</TagName>
                <TagName br tabs={2}>/body</TagName>
                <TagName>/html</TagName>
            </div>
        </section>
    );
}

export default About;