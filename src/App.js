import React from 'react';
import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <Chat />
      <ForgotPassword />
    </div>
  );
}

export default App;
