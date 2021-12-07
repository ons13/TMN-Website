import React from 'react';
import {Button, Grid, Col,Group,Menu,Tooltip} from '@mantine/core';
import {Link} from 'react-router-dom';
import logo from '../media/TMN_inverted.jpg';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const useStyles = makeStyles({

    button: {
    backgroundColor:"#fff",
     color:'#3d3d3d', 
     marginTop:0,
     height:'52px',
     borderRadius:'0px',
      '&:hover': {
        backgroundColor:'#3d3d3d !important',
        color: '#FFFFFF',
    },
  },
  
    fcb:{
        color:'#3d3d3d', 
        '&:hover': {
            color: '#3b5998'
            
        }

    },

    ytb:{
        color:'#3d3d3d', 
        '&:hover': {
            color: '#0077b5'
        }

    },

    ins:{
        color:'#3d3d3d', 
        '&:hover': {
            color:'#d6249f'
        }

    },

    usr:{
        color:'#3d3d3d', 
        '&:hover': {
            color:'#9f9f9f'
        }

    },


})
  
function NavBar (){

    const classes = useStyles();

    const centered={
        display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center',marginTop:0
    };

  return (

    <div>
        <div style={{marginBottom:50}}>
            <Grid columns={9} style={{width:'101%',height:'60px',backgroundColor:'#FFFFFF',position:'fixed',top:'0',left:'0', zIndex:'1'}}>
            
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
                <Group style={{marginTop:'10px'}}>
                    <a href="https://www.facebook.com/TunisianModernNewspaperOfficiel"><FacebookIcon className={classes.fcb}/></a>
                    <a href="https://www.instagram.com/tunisian_modern_newspaper/"><InstagramIcon className={classes.ins}/></a>
                    <a href="https://www.linkedin.com/company/tunisian-modern-newspaper/"><LinkedInIcon className={classes.ytb}/></a>

                </Group>
                        
                        
                
                </Col>
                <Col span={1} style={centered}>
                    <Link to="/loginNavigation">
                        <Tooltip position="bottom" placement="center" label="sign in or signup to your account" gutter={10} >
                            <AccountCircleIcon className={classes.usr} style={{fontSize:35,marginTop:'10px',marginLeft:'30px'}}/>
                        </Tooltip> 
                    </Link>
                </Col>
            
            </Grid>
            
        </div>
    </div>
    
    )
}


export default NavBar;