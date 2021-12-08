import React, {useState, useRef } from 'react';
import {Center,Checkbox,Button,Text,Space,Group,TextInput,PasswordInput,Tooltip,MediaQuery,Col,Grid } from '@mantine/core';
import EmailIcon from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import IconButton from '@mui/material/IconButton';
import { generate } from 'generate-password';


const hide = { display: 'none' };
function Signup() {

    const usernameRef = useRef(null);
    const mailRef = useRef(null);
    const passRef = useRef(null);
    const cpassRef = useRef(null);
    const chk = useRef(null);
    var [isChecked,setisChecked] = useState(false);


    function signupbutton(){
        alert("username:"+usernameRef.current.value+"\nmail:"+mailRef.current.value+"\npass:"+passRef.current.value+"\nconfirm pass:"+cpassRef.current.value+"\nchecked:"+isChecked);

    }

    function passgenerator(){
        var pass = generate({length:10,numbers:true});
        passRef.current.value=pass;
        cpassRef.current.value=pass;

    }

    return ( 
        <div>
        <MediaQuery largerThan="sm" styles={hide}>
        <Center style={{height:'100vh'}}>
            <div style={{width:'60%'}}>
            <Group direction="column" style={{height:'100vh',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text weight={700} style={{color:'#3d3d3d',fontSize:24}}>Sign in to your account</Text>
            <Space h="ls" />
            <TextInput ref={usernameRef} icon={<PersonIcon style={{color:'#3d3d3d'}}/>} size="lg" placeholder="username" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <TextInput ref={mailRef} icon={<EmailIcon style={{color:'#3d3d3d'}}/>} size="lg" placeholder="email" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <Grid justify="space-between" columns={12} style={{width:'70%'}}>
            <Col span={10}>
            <PasswordInput ref={passRef} icon={<Lock style={{color:'#3d3d3d', width:200}}/>} size="lg" placeholder="password" radius="xs" error="" style={{width:'100%'}} required/>
            </Col>
            <Col span={2}>
            <Tooltip position="top" placement="center" label="use this button to generator a strong password" gutter={10} >
            <IconButton onClick={passgenerator} style={{width:50, height:50,borderRadius:1 ,backgroundColor:'#3d3d3d'}}><LockResetIcon style={{ color:'#ffffff'}}/></IconButton>
            </Tooltip>
            </Col>
            </Grid>
            <Space h="ls" />
            <PasswordInput ref={cpassRef} icon={<Lock style={{color:'#3d3d3d', width:200}}/>} size="lg" placeholder="confirm password" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <Checkbox onChange={e => setisChecked(e.target.checked)} ref={chk} label="I agree to terms of service and privacy policy" color="dark"/>
            <Space h="ls" />
            <Button onClick={signupbutton} color="dark" radius="xs" size="lg">Sign up</Button>

            </Group>
            </div>

            <div style={{padding:20,width:'40%',backgroundColor:'#3d3d3d',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Group direction="column" style={{height:'100vh',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text weight={700} style={{color:'#FFFFFF',fontSize:24, textAlign:'center'}}>Welcome to Tunisian Modern Newspaper</Text>
            <Space h="xl" />
            <div style={{width:200,height:2,backgroundColor:'#FFFFFF'}}/>
            <Space h="xl" />
            <Text weight={300} style={{color:'#FFFFFF',fontSize:16,textAlign:'center'}}>we are a team of highly motivated indivuals who bla bla bla...it will be a great pleasure for you to join us eds eds eds boiiii</Text>
            
            </Group>
            </div>
        </Center>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={hide}>
            <div>
            <Group direction="column" style={{height:'100vh',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text weight={700} style={{color:'#3d3d3d',fontSize:24}}>Sign in to your account</Text>
            <Space h="ls" />
            <TextInput ref={usernameRef} icon={<PersonIcon style={{color:'#3d3d3d'}}/>} size="lg" placeholder="username" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <TextInput ref={mailRef} icon={<EmailIcon style={{color:'#3d3d3d'}}/>} size="lg" placeholder="email" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <Grid columns={12} style={{width:'70%'}}>
            <Col span={10}>
            <PasswordInput ref={passRef} icon={<Lock style={{color:'#3d3d3d', width:200}}/>} size="lg" placeholder="password" radius="xs" error="" style={{width:'100%'}} required/>
            </Col>
            <Col span={2}>
            <Tooltip position="top" placement="center" label="use this button to generator a strong password" gutter={10} >
            <IconButton onClick={passgenerator} style={{width:50, height:50,borderRadius:1 ,backgroundColor:'#3d3d3d'}}><LockResetIcon style={{ color:'#ffffff'}}/></IconButton>
            </Tooltip>
            </Col>
            </Grid>
            <Space h="ls" />
            <PasswordInput ref={cpassRef} icon={<Lock style={{color:'#3d3d3d', width:200}}/>} size="lg" placeholder="confirm password" radius="xs" error="" style={{width:'70%'}} required/>
            <Space h="ls" />
            <Checkbox onChange={e => setisChecked(e.target.checked)} ref={chk} label="I agree to terms of service and privacy policy" color="dark"/>
            <Space h="ls" />
            <Button onClick={signupbutton} color="dark" radius="xs" size="lg">Sign up</Button>

            </Group>
            </div>
        </MediaQuery>
        </div>
     );
}

export default Signup;