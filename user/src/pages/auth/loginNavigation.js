import React from 'react';
import { Group,Button,Text } from '@mantine/core';
import {Link} from 'react-router-dom';
import googleIcon from '../../media/google.svg';
import fbIcon from '../../media/facebook.svg';
import mailIcon from '../../media/mail.png';

function LoginNav() {
    const buttonstyle={
        width:300,
        height:50,
        borderWidth:1
        
        
    }
    return ( 
        <div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:"100vh"}}>
            <Group direction="column" spacing="xl">
            <Text size="xl" weight={700} >Sign in to your account</Text>
            <Button color="dark" radius="xs" style={buttonstyle} variant="outline" leftIcon={<img src={googleIcon} alt="google" style={{width:16,height:16}} />}> Sign in with google account </Button>
            <Button color="dark" radius="xs" style={buttonstyle} variant="outline" leftIcon={<img src={fbIcon} alt="google" style={{width:18,height:18}} />}> Sign in with Facebook account</Button>
            <Button color="dark" radius="xs" component={Link} to="/login" style={buttonstyle} variant="outline" leftIcon={<img src={mailIcon} alt="google" style={{width:22,height:16}} />}> Sign in with email address </Button>
            <Group spacing="xs">
            <Text color="dimmed" size="md">Still don't have an account?</Text>
            <Text color="dark" variant="link" component={Link} to="/signup">Join us now.</Text>
            </Group>
            </Group>
            </div>
        </div>
     );
}

export default LoginNav;