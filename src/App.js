import React from 'react';
import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Chat from './pages/Chat'
import ForgotPassword from './pages/ForgotPassword'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <Chat />
      <ForgotPassword />
      <NotFound />
    </div>
  );
}

export default App;
