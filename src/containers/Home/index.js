import React from 'react';
import { TagName, TagText } from '../../components/Tags';
import './style.scss';

const Home = () => {
    return (
        <section className='home container'>
            <div>
                <TagName br>html</TagName>
                <TagName br tabs={2}>body</TagName>
                <TagName br tabs={4}>h1</TagName>
                <TagText tabs={6}>
                    <h1>
                        Hi,
                        <br />
                        I'm&nbsp;<span>Snir</span>,
                        <br />
                        Web developer.
                    </h1>
                </TagText>
                <TagName br tabs={4}>/h1</TagName>
                <TagName br tabs={2}>/body</TagName>
                <TagName>/html</TagName>
            </div>
        </section>
    );
}

export default Home;