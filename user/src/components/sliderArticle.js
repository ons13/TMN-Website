import { Image,Text } from '@mantine/core';
import { getThemeProps } from '@mui/styles';
import React from 'react';
import {Link} from 'react-router-dom';

function SliderArticle(props) {
    return ( 
        <div style={{display:'flex', flexDirection:'row',height:'50vh',width:'166vh'}}>
            <div style={{width:'70%',backgroundColor:'#FFffFF'}}>
            <Image style={{width:'100%',height:'100%'}} fit="cover" src={props.src}/>
            </div>
            <div style={{width:'30%',backgroundColor:'#3d3d3d',padding:'10px'}}>
            <Text weight={1000} style={{fontSize:'36px',color:'#fff'}}>{props.title}</Text>
            <Text weight={300} style={{fontSize:'14px',color:'#fff'}}>{props.description}</Text>
            <Text component={Link} to={"/"+props.id} style={{position:'fixed', bottom:10,right:10,color:'#fff'}}>read more →</Text>
            </div>

        </div>
     );
}

export default SliderArticle;