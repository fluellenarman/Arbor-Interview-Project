import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import { Container } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function Login() {

    const boxStyle = {
        // backgroundColor: "DodgerBlue",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '350px'

    };
    const containerStyle = {
        height: '80%',
        // backgroundColor: "DodgerBlue"
    };
    const inputStyle = {
        alignSelf: 'center',
    }
    
    // sessionStorage.setItem('showSnackbar', false);

    const navigate = useNavigate();
    const navToSignUp = () => navigate("/signUp")
    
    const loginClicked = () => {
        console.log('here')
        console.log(passwordRef.current.value);
        console.log(emailRef.current.value);
        navigate("/homePage")
    }

    let passwordRef = useRef();
    let emailRef = useRef();

  return (
    <Container style={containerStyle} maxWidth="sm">
        <Typography variant="h3" gutterBottom>Arbor Interview Project</Typography>
        <Box style={boxStyle} component="form">
            {/* <Card sx={{ minWidth: 275 }}> */}
            <Typography style={inputStyle} variant="h4" gutterBottom>Login</Typography>
                
                {/* <CardContent style={cardStyle}> */}
                    <div style={inputStyle}>
                    <Typography>Email</Typography>
                    <Input defaultValue="" inputRef={emailRef}/>
                    </div>

                    <div style={inputStyle}>
                    <Typography>Password</Typography>
                    <Input defaultValue="" inputRef={passwordRef}/>
                    </div>
                    <Button variant="contained" onClick={loginClicked}>Login</Button>
                    <Divider />
                    <Button variant="text" onClick={navToSignUp}>Sign Up</Button>
                   
                    
                {/* </CardContent> */}
            {/* </Card> */}
        </Box>
        
    </Container>
  )
}

export default Login