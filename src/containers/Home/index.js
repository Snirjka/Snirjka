import React, { useEffect } from 'react';
import './style.scss';
import { TagGroup } from '../../components/Tags';
import StretchingChild from '../../components/StretchingChild';

const Home = () => {
    useEffect(() => {

    }, [])
    return (
        <section className='home container'>
            <TagGroup tag='html'>
                <TagGroup tag='body'>
                    <TagGroup tag='h1'>
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
                    </TagGroup>
                </TagGroup>
            </TagGroup>
        </section>
    );
}

export default Home;