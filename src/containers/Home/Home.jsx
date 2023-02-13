import React, { useEffect, useRef, useState } from 'react';
import { CloseSidebar, DeskstopSidebar, HomeContainer, Logo, MobileMenuIcon, MobileSidebar, MobileSidebarWrapper, ProfileImage, RouterContainer, ToggleSidebarContainer, ToggleSidebarWrapper } from './styles';
import { Sidebar } from '../../components';
import { Link, Route, Routes } from 'react-router-dom';

import logo from '../../assets/snap.png';
import useAuthStore from '../../store/useAuth';
import { UsersProfile } from '../../components';
import Pins from '../Pins/Pins';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { userProfile } = useAuthStore();
  const scrollRef = useRef(null);

  useEffect(() => {
   if(scrollRef.current){
     window.scrollTo(0, 0);
   }
  }, [])
  

  return (
    <HomeContainer>
      <DeskstopSidebar>
        <Sidebar />
      </DeskstopSidebar>
      <MobileSidebar>
        <MobileSidebarWrapper>
          <MobileMenuIcon onClick={() => setToggleSidebar(true)} />
          <Link to='/'>
            <Logo src={logo} alt='logo' />
          </Link>
          <Link to={`/user-profile/${userProfile?._id}`}>
            <ProfileImage src={userProfile?.image} alt='user-profile' />
          </Link> 
        </MobileSidebarWrapper>      
        {toggleSidebar && (
          <ToggleSidebarContainer>
            <ToggleSidebarWrapper>
              <CloseSidebar onClick={() => setToggleSidebar(false)} />
            </ToggleSidebarWrapper>
            <Sidebar closeToggle={setToggleSidebar}/>
          </ToggleSidebarContainer>
        )}
        </MobileSidebar>
        <RouterContainer >
          <Routes>
            <Route path='/user-profile/:userId' element={<UsersProfile />} />
            <Route path='/*' element={<Pins />} />
          </Routes>
        </RouterContainer>  
    </HomeContainer>
  )
}

export default Home;