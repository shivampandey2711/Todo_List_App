// Header.js
import React from 'react';

function Header({ loggedIn, currentUser, onLogout }) {
  return (
    <header>
      <h1>Todo App</h1>
      {loggedIn ? (
        <div>
          Welcome, {currentUser}! <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </header>
  );
}

export default Header;

