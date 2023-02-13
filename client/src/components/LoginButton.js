import { useAuth0 } from '@auth0/auth0-react'
import Profile from './Profile';
import Button from '@mui/material/Button';


function LoginButton() {
    const divStyle = {
        // backgroundColor: "DodgerBlue",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    };

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0()
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }

      return (
        !isAuthenticated && (
          <div style={divStyle}>
            <Button sx={{ width: 1/2  }} variant="contained" onClick={()=>loginWithRedirect()}>login </Button>
          </div>
      )
    )
  }

export default LoginButton