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
import { useAuth0 } from '@auth0/auth0-react'

import Auth0Login from './Auth0Login';

function Login() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(isAuthenticated);

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
    
    const enterClicked = () => {
        navigate("/homePage")
    }


  return (
    <Container style={containerStyle} maxWidth="sm">
        <Typography variant="h3" gutterBottom>Arbor Interview Project</Typography>
        <Box style={boxStyle} component="form">
            {/* <Card sx={{ minWidth: 275 }}> */}
            <Typography style={inputStyle} variant="h4" gutterBottom>Landing Page</Typography>
                
                {/* <CardContent style={cardStyle}> */}
                    
                    {/* <Button variant="contained" onClick={enterClicked}>Enter</Button> */}
                    <Auth0Login/>
                    <Divider />

                   
                    
                {/* </CardContent> */}
            {/* </Card> */}
        </Box>
        
    </Container>
  )
}

export default Login