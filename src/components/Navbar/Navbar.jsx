import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router';
import useAuthStore from '../../store/useAuth';
import { CreatePinIconLink, Links, NavContainer, NavRightContainer, NavWrapper, SearchIcon, SearchInput, UserImage } from './styles';

const Navbar = ({searchTerm, setSearchTerm}) => {
  const { userProfile } = useAuthStore();
  const navigate = useNavigate();

  if(!userProfile) return null;

  return (
    <NavContainer>
      <NavWrapper>
        <SearchIcon />
        <SearchInput 
          type='text' 
          value={searchTerm}
          placeholder='Search'
          onFocus={() => navigate('/search')}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
      </NavWrapper>
        <NavRightContainer>
          <Links to={`/user-profile/${userProfile?._id}`}>
            <UserImage src={userProfile?.image} alt='user' />
          </Links>
          <CreatePinIconLink to={`/create-pin`}>
            <IoMdAdd />
          </CreatePinIconLink>
        </NavRightContainer>
    </NavContainer>
  )
}

export default Navbar;