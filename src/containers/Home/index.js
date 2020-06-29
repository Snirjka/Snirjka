import React, { useEffect } from 'react';
import { useDencrypt } from 'use-dencrypt-effect';
import { TagName, TagText } from '../../components/Tags';
import './style.scss';

const projectLink = 'https://github.com/snirjka/snirjka.github.io';

const SourceCodeLink = () => {
    const { result, dencrypt } = useDencrypt();
    useEffect(() => {
        dencrypt('VIEW SOURCECODE');
    })
    return (
        <a href={projectLink} rel="noopener noreferrer" target="_blank">{result}</a>
    );
};

const Home = () => {
    return (
        <section className='home container'>
            <div>
                <TagName br>html</TagName>
                <TagName br tabs={2}>body</TagName>
                <TagName br tabs={4}>h1</TagName>
                <TagText tabs={6}>
                    <h1>Hi,<br />I'm Snir,<br />Web developer.</h1>
                </TagText>
                <TagName br tabs={4}>/h1</TagName>
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

export default Home;