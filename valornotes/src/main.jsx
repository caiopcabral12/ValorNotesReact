import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global'
import theme from './styles/themes'
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { User } from './pages/User';
import { Details } from './pages/Details';
import { NewNote } from './pages/NewNote';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode> 
    <ThemeProvider theme ={theme}>
      <GlobalStyles/>
      <NewNote/>
    </ThemeProvider>
  </React.StrictMode>,
);
