import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../components/Profile';



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
        <button onClick={()=>loginWithRedirect()}>login button</button>
        <button onClick={()=>logout()}> logout</button>
        <Profile/>
        <div>2</div>
      </div>
        
  )
}

export default Auth0LoginHelper