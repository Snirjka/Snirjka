import React, { useContext } from 'react';
import { TagName, TagText } from '../../components/Tags';
import { SkillsContext } from '../../contexts/SkillsContext';
import mePNG from '../../assets/images/me.png';
import './style.scss';

const aboutMe = `Hello, my name is Snir Kara, 25 years old from Israel.<br /><br />
In the last couple of years I am studying programming & web development,<br />
I got experience in both frontend and backend programming,<br />
including developing large scale projects, mobile pwa apps,<br />
fully responsive websites, troubleshooting, and debugging code.<br />
I am passionate about learning new skills & technolegies.`

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