import React, { useEffect } from 'react';
import { Login } from './components';
import GlobalStyle from './globalStyles';
import { GoogleOAuthProvider} from '@react-oauth/google';
import { Routes, Route, useNavigate } from 'react-router-dom';
import useAuthStore from './store/useAuth'
import Home  from './containers/Home/Home';

const App = () => {

  const navigate = useNavigate();
  const { userProfile } =useAuthStore();

  
  useEffect(() => {  
    if(!userProfile) navigate('/login')
    
  })
  return (
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`} >
  <GlobalStyle/>
  <Routes> 
     <Route exact path='/*' element={<Home />}/>
     <Route path='/login' element={<Login />} />
  </Routes>
  </GoogleOAuthProvider>

    
  );
}

export default App;