import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0LoginHelper from './Auth0LoginHelper';

const Auth0Login = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
        <Auth0LoginHelper/>
    </Auth0Provider>
  );
};

export default Auth0Login