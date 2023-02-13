import React from 'react';
import { Heading, Links, NavContainer, NavLinks, SidebarContainer, SidebarImage, SidebarLink, SidebarWrapper, UserImage } from './styles';
import { RiHomeFill } from 'react-icons/ri';

import logo from '../../assets/snap.png';
import useAuthStore from '../../store/useAuth';
import { categories } from '../../utils/data';

const Sidebar = ({closeToggle}) => {
  const { userProfile } = useAuthStore();

  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false)
  };
 
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarLink to='/' onClick={handleCloseSidebar}>
          <SidebarImage src={logo} alt='logo' />
        </SidebarLink>
        <NavContainer>
          <NavLinks to='/' onClick={handleCloseSidebar}>
            <RiHomeFill style={{marginRight: '7px'}} />
            Home
          </NavLinks>
          <Heading> Discover Categories </Heading>
          {categories.slice(0, categories.length -1 ).map((category) => (
              <NavLinks to={`/category/${category.name}`} onClick={handleCloseSidebar} key={category.name}>
              <UserImage src={category.image} alt={category.name} />
                {category.name}
              </NavLinks>
          ))}
        </NavContainer>
        {userProfile && (
          <Links to={`/user-profile/${userProfile._id}`}>
            <UserImage src={userProfile.image} alt='user-profile' />
            <p>{userProfile.userName}</p>
          </Links>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;