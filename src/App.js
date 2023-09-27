// App.js (Updated)
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';
import Error from './components/Error'; // Import the Error component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null); // New error state

  const handleLogin = (username, password) => {
    // Simulate user authentication (you should validate credentials)
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
      setCurrentUser(username);
      setError(null); // Clear any previous errors
    } else {
      setError('Incorrect username or password'); // Set an error message
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    setError(null); // Clear any previous errors
  };

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} currentUser={currentUser} onLogout={handleLogout} />
        {error && <Error message={error} />} {/* Display the error message */}
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/todo" /> : <LoginForm onLogin={handleLogin} />}
          </Route>
          <PrivateRoute path="/todo" loggedIn={loggedIn}>
            <TodoList currentUser={currentUser} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
