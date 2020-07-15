import React, { useEffect } from 'react';
import './style.scss';
import { TagName, TagText } from '../../components/Tags';
import StretchingChild from '../../components/StretchingChild';

const Home = () => {
    useEffect(() => {

    }, [])
    return (
        <section className='home container'>
            <div>
                <TagName br>html</TagName>
                <TagName br tabs={2}>body</TagName>
                <TagName br tabs={4}>h1</TagName>
                <TagText tabs={6}>
                    <h1>
                        {
                            ['H', 'i', ','].map((l, i) => <StretchingChild key={i}>{l}</StretchingChild>)
                        }
                        <br />
                        {
                            ['I', "'", 'm'].map((l, i) => <StretchingChild key={i}>{l}</StretchingChild>)
                        }&nbsp;
                        <div className='name'>
                            {
                                ['S', 'n', 'i', 'r'].map((l, i) => <StretchingChild key={i}>{l}</StretchingChild>)
                            }
                        </div>
                        <StretchingChild>,</StretchingChild>
                        <br />
                        {
                            ['W', 'e', 'b'].map((l, i) => <StretchingChild key={i}>{l}</StretchingChild>)
                        }&nbsp;
                        {
                            ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'].map((l, i) => <StretchingChild key={i}>{l}</StretchingChild>)
                        }
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