// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, loggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

