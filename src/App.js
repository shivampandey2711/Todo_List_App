// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    // Simulate user authentication (you should validate credentials)
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
      setCurrentUser(username);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} currentUser={currentUser} onLogout={handleLogout} />
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

