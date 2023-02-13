import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../components/Profile';
import Button from '@mui/material/Button';

import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

function Auth0LoginHelper() {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0()
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const helper = () => loginWithRedirect();
    return (
      
      <div>
        <LoginButton/>
        <LogoutButton/>
      </div>

  )
}

export default Auth0LoginHelper