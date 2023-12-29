import React from 'react'
import Container from 'react-bootstrap/Container';

import Cards from './Cards';
import AboutCard from './AboutCard';
import Posts from './Posts';
import Tags from './Tags';
import "./Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
    return (
        <div>
            <Container >
                <div className='layout'>
                    <div className='blogEntries'>
                        <Cards />
                        
                    </div>
                    <div className='IntroductionMenu'>
                        <AboutCard />
                        <Posts />
                        <Tags/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Content