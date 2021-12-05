import React from 'react';
import {Button, Grid, Col,Center,Menu, MenuItem, MenuLabel, Divider, Text, Image } from '@mantine/core';
import {Link} from 'react-router-dom';
import logo from '../media/TMN_inverted.jpg';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

    button: {
    backgroundColor:"#fff",
     color:'#3d3d3d', 
     marginTop:0,
     height:'45px',
     borderRadius:'0px',
      '&:hover': {
        backgroundColor:'#3d3d3d !important',
        color: '#FFFFFF',
    },
  }})
  
function NavBar (){

    const classes = useStyles();

    const centered={
        display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center',marginTop:0
    };

  return (

    <div>
        <div style={{marginBottom:50}}>
            <Grid columns={9} style={{width:'101%',height:'50px',backgroundColor:'#FFFFFF',position:'fixed',top:'0',left:'0', zIndex:'1'}}>
            
                <Col span={2} style={centered}><img alt="" src={logo} style={{height:40}}/></Col>

                <Col span={1} style={centered}>
                    <Menu control={<Button className={classes.button} style={{useStyles}}>News</Button>}>
                        <Menu.Item component={Link} to="/eds">subcategory 1</Menu.Item>
                        <Menu.Item >subcategory 2</Menu.Item>
                        <Menu.Item>subcategory 3</Menu.Item>
                    </Menu>
                </Col>

                <Col span={1} style={centered}>
                <Menu control={<Button className={classes.button} style={{useStyles}}>Blogs</Button>}>
                        <Menu.Item component={Link} to="/eds">subcategory 1</Menu.Item>
                        <Menu.Item >subcategory 2</Menu.Item>
                        <Menu.Item>subcategory 3</Menu.Item>
                    </Menu>
                </Col>

                <Col span={1} style={centered}>
                <Menu control={<Button className={classes.button} style={{useStyles}}>Events</Button>}>
                        <Menu.Item component={Link} to="/eds">subcategory 1</Menu.Item>
                        <Menu.Item >subcategory 2</Menu.Item>
                        <Menu.Item>subcategory 3</Menu.Item>
                    </Menu>
                </Col>

                <Col span={1} style={centered}>
                <Menu control={<Button className={classes.button} style={{useStyles}}>Podcasts</Button>}>
                        <Menu.Item component={Link} to="/eds">subcategory 1</Menu.Item>
                        <Menu.Item >subcategory 2</Menu.Item>
                        <Menu.Item>subcategory 3</Menu.Item>
                    </Menu>
                </Col>

                <Col span={1} offset={1} style={centered}>
                <Menu control={<Button className={classes.button} style={{useStyles}}>About</Button>}>
                        <Menu.Item component={Link} to="/about">about us</Menu.Item>
                        <Menu.Item >contact us</Menu.Item>
                        
                    </Menu>
                </Col>
                <Col span={1} style={centered}>
                    <Button variant="gradient" gradient={{ from: 'grape', to: 'cyan', deg: 35 }}>login or signup</Button>
                </Col>
            
            </Grid>
            
        </div>
    </div>
    
    )
}


export default NavBar;