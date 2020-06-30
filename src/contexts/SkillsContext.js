import React, { createContext, useState } from 'react';

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
    const [skills] = useState([
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
    ]);

    return (
        <SkillsContext.Provider value={{ skills }}>
            {props.children}
        </SkillsContext.Provider>
    );
}

export default SkillsContextProvider;