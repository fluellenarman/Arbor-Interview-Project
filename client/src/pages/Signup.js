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
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function SignUp()  {

    const boxStyle = {
            // backgroundColor: "DodgerBlue",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '750px'

    };
    const containerStyle = {
        // height: '80%',
        // backgroundColor: "DodgerBlue"
    };

    const [value, setValue] = React.useState(dayjs('2000-08-18T21:11:54'));
    const [model, setModel] = React.useState('');
    let emailRef = useRef();
    let passwordRef = useRef();
    let firstNameRef = useRef();
    let lastNameRef = useRef();
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleChange2 = (newValue) => {
        setModel(newValue.target.value);
    };
    

    let navigate = useNavigate();
    let navToLogin = () => navigate("/")
    const signUpClicked = () => {
        console.log('here')
        console.log(value);
        console.log(model);
        console.log(emailRef);
        console.log(passwordRef);
        console.log(firstNameRef);
        console.log(lastNameRef);

    }

  return (
    <Container style={containerStyle} maxWidth="sm">
        <Typography variant="h3" gutterBottom>Arbor Interview Project</Typography>
        <Box style={boxStyle} component="form">
            {/* <Card sx={{ minWidth: 275 }}> */}
            <Typography variant="h4" gutterBottom>Sign Up</Typography>
                {/* <CardContent style={cardStyle}> */}
                    <div>
                    <Typography>Email</Typography>
                    <Input defaultValue="" inputRef={emailRef}/>
                    </div>

                    <div>
                    <Typography>Password</Typography>
                    <Input defaultValue="" inputRef={passwordRef}/>
                    </div>

                    <div >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker 
                        label="Date mobile"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                    </div>

                    <div>
                    <Typography>First Name</Typography>
                    <Input defaultValue="" inputRef={firstNameRef}/>
                    </div>

                    <div>
                    <Typography>Last Name</Typography>
                    <Input defaultValue="" inputRef={lastNameRef}/>
                    </div>
        
                    <FormControl fullWidth>
                        <InputLabel id="carModel-label">Car model</InputLabel>
                        <Select
                        labelId="carModel-label"
                        id="carModel-id"
                        value={model}
                        label="Car Model"
                        onChange={handleChange2}
                        >
                        <MenuItem value={"2001 Honda Civic"}>2001 Honda Civic</MenuItem>
                        <MenuItem value={"2002 Toyota Prius"}>2002 Toyota Prius</MenuItem>
                        <MenuItem value={"2001 Subaru Impreza"}>2001 Subaru Impreza</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" onClick={signUpClicked}>Sign Up</Button>

                    

                    <Divider />
                    <Button variant="text" onClick={navToLogin}>Login</Button>
                   
                    
                {/* </CardContent> */}
            {/* </Card> */}
        </Box>
        
    </Container>
  )
}

export default SignUp