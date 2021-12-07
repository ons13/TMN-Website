import {Center, Group, Space, Text } from '@mantine/core';
import React from 'react';
import NavBar from '../components/navbar';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import SliderArticle from '../components/sliderArticle';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import LatestNews from '../components/latestComp';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function LandingPage() {
    return ( 
        <div>
            <NavBar/>
            <div style={{backgroundColor:'#f5f5f5', width:'100%',height:'100%'}}>
            <Space/>
            <Center>
            <AutoplaySlider organicArrows={false} play={true} cancelOnInteraction={false} interval={6000} style={{width:'80%',height:'50vh'}}>
               <div><SliderArticle src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1" id="02" title="earth gets nuked" description="unsurprisingly, fallout players are the first to die horrible deaths. and other things to say about the faces of calamity at the dinner table"/></div>
               <div><SliderArticle src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1" id="3" title="things not to do in public" description="a list of things that should not be done in public, no throwing nuclear waste at people is never ok"/></div>
            </AutoplaySlider>
            </Center>
            <div style={{marginTop:'50px',marginLeft:'50px',marginRight:'50px'}}>
            <Text weight={900} style={{fontSize:'46px'}}>latest news:</Text>
            <Group position='center'>
            <LatestNews id='5' title="eds eds" description="description of said event" src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"/>
            <LatestNews id='5' title="title" description="tell me why"/>
            <LatestNews id='5' title="this is basically copy paste" description="you get the idea"/>
            </Group>
            <Text weight={900} style={{fontSize:'46px'}}>latest events:</Text>
            <Group position='center'>
            <LatestNews id='5' title="eds eds" description="description of said event" src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"/>
            <LatestNews id='5' title="title" description="tell me why" src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"/>
            <LatestNews id='5' title="this is basically copy paste" description="you get the idea"/>
            </Group>
            <Text weight={900} style={{fontSize:'46px'}}>latest blogs:</Text>
            <Group position='center'>
            <LatestNews id='5' title="eds eds" description="description of said event" src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"/>
            <LatestNews id='5' title="title" description="tell me why"/>
            <LatestNews id='5' title="this is basically copy paste" description="you get the idea" src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"/>
            </Group>
            <Text weight={900} style={{fontSize:'46px'}}>latest podcasts:</Text>
            <Group position='center'>
            <LatestNews id='5' title="eds eds" description="description of said event" src="https://cdnb.artstation.com/p/assets/images/images/024/796/147/large/thomas-simon-untitled-8.jpg?1583562121&dl=1"/>
            <LatestNews id='5' title="title" description="tell me why"/>
            <LatestNews id='5' title="this is basically copy paste" description="you get the idea" src="https://i0.wp.com/www.eurasiareview.com/wp-content/uploads/2018/12/c-13.jpg?fit=830%2C510&ssl=1"/>
            </Group>
            <Space/>
            </div>
            </div>
        </div>
     );
}

export default LandingPage;