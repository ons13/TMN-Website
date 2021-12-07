import { Button, Center, Group, Space } from '@mantine/core';
import React from 'react';
import NavBar from '../components/navbar';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import SliderArticle from '../components/sliderArticle';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

function LandingPage() {
    return ( 
        <div>
            <NavBar/>
            <div style={{backgroundColor:'#f5f5f5', width:'100%',height:'100vh'}}>
            <Space/>
            <Center>
            <AutoplaySlider organicArrows={false} play={true} cancelOnInteraction={false} interval={6000} style={{width:'80%',height:'50vh'}}>
               <div><SliderArticle src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1" id="02" title="earth gets nuked" description="unsurprisingly, fallout players are the first to die horrible deaths. and other things to say about the faces of calamity at the dinner table"/></div>
               <div><SliderArticle src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1" id="3" title="things not to do in public" description="a list of things that should not be done in public, no throwing nuclear waste at people is never ok"/></div>
            </AutoplaySlider>
            </Center>
            </div>
        </div>
     );
}

export default LandingPage;