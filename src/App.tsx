import React from 'react';

//import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import GlobalStyle from './styles/global'

import  AppProvider from './hooks'

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn/>
    </AppProvider>
    <GlobalStyle/>
  </>
);


export default App;
