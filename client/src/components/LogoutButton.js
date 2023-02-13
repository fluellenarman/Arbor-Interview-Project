import { useAuth0 } from '@auth0/auth0-react'
import Profile from './Profile';
import {useNavigate} from "react-router-dom"

import Button from '@mui/material/Button';
import { margin } from '@mui/system';


function LogoutButton() {
  const divStyle = {
    // backgroundColor: "DodgerBlue",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    'alignItems': 'center',

  };

  const { logout } = useAuth0()
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);
  
  const navigate = useNavigate();
  const navToSignUp = () => navigate("/signUp")

  const enterClicked = () => {
    navigate("/homePage")
}

  if (isLoading) {
    return <div>Loading ...</div>;
  }
    return (
      isAuthenticated && (
        <div style={divStyle}>
          
          {/* <div > */}
          <Button variant="contained" onClick={enterClicked} sx={{ width: 1/2, mb: '100px'}}>Enter</Button>
            <Button variant="contained" onClick={()=>logout()} sx={{ width: 1/4, }}> logout</Button>
          {/* </div> */}
      </div>
    )
  )
}

export default LogoutButton