import React, {useState} from 'react';
import {MediaQuery,Button, Grid, Col,Drawer,Menu,Tooltip,SimpleGrid,Burger,Accordion} from '@mantine/core';
import {Link} from 'react-router-dom';
import logo from '../media/TMN_inverted.jpg';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const hide = { display: 'none' };
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

  buttonDrawer: {
    backgroundColor:"#fff",
     color:'#3d3d3d', 
     marginTop:0,
     marginBottom:50,
     height:'52px',
     width:'100%',
     borderRadius:'0px',
     fontSize:'24px',
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
    const [opened, setOpened] = useState(false);
    const classes = useStyles();

    const centered={
        display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center',marginTop:0
    };

  return (

    <div>
        <MediaQuery largerThan="xs" styles={hide}>
        <div style={{marginBottom:50}}>
            <Grid columns={9} style={{width:'101%',height:'60px',backgroundColor:'#FFFFFF',position:'fixed',top:'0',left:'0', zIndex:'5'}}>
            
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
                <SimpleGrid cols={3}>
                    <a href="https://www.facebook.com/TunisianModernNewspaperOfficiel"><FacebookIcon className={classes.fcb}/></a>
                    <a href="https://www.instagram.com/tunisian_modern_newspaper/"><InstagramIcon className={classes.ins}/></a>
                    <a href="https://www.linkedin.com/company/tunisian-modern-newspaper/"><LinkedInIcon className={classes.ytb}/></a>

                </SimpleGrid>
                        
                        
                
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
        </MediaQuery>

        <MediaQuery smallerThan="xs" styles={hide}>
            <div style={{marginBottom:50}}>
            <Grid columns={9} style={{width:'101%',height:'60px',backgroundColor:'#FFFFFF',position:'fixed',top:'0',left:'0', zIndex:'5'}}>
            <Col span={3} style={centered}>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} title="drawer"/>
            <Drawer opened={opened} onClose={() => setOpened(false)} title={<img alt="" src={logo} style={{height:40}}/>} padding="xl" size="xl">
            <Button className={classes.buttonDrawer} style={{useStyles}}>News</Button>
            <Button className={classes.buttonDrawer} style={{useStyles}}>Blogs</Button>
            <Button className={classes.buttonDrawer} style={{useStyles}}>Events</Button>
            <Button className={classes.buttonDrawer} style={{useStyles}}>podcasts</Button>
            <SimpleGrid spacing="xl" cols={3} style={{display:'flex', alignItems:'center',alignContent:'center',justifyContent:'center',marginTop:0}}>
                    <a href="https://www.facebook.com/TunisianModernNewspaperOfficiel"><FacebookIcon style={{fontSize:'48px'}} className={classes.fcb} /></a>
                    <a href="https://www.instagram.com/tunisian_modern_newspaper/"><InstagramIcon style={{marginLeft:50,marginRight:50,fontSize:'48px'}} className={classes.ins}/></a>
                    <a href="https://www.linkedin.com/company/tunisian-modern-newspaper/"><LinkedInIcon style={{fontSize:'48px'}} className={classes.ytb}/></a>

                </SimpleGrid>
            </Drawer>
            </Col>
            <Col span={3} style={centered}>
            <img alt="" src={logo} style={{height:40}}/>
            </Col>
            <Col span={3} style={centered}>
            <Link to="/loginNavigation">
                <AccountCircleIcon className={classes.usr} style={{fontSize:35,marginTop:'10px',marginLeft:'30px'}}/>
            </Link>
            </Col>

            </Grid>
            </div>
        </MediaQuery>
    </div>
    
    )
}


export default NavBar;