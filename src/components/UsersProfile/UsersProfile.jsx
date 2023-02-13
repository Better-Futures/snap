import React, { useEffect, useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { useNavigate, useParams } from 'react-router-dom';

import useAuthStore from '../../store/useAuth';
import { Spinner, MasonryLayout } from '../../components';
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../../utils/data';
import { client } from '../../client';
import { ActiveButton, Logout, LogoutButton, LogoutContainer, NoPins, NotActiveButton, UserBanner, UserImage, UserInfo, UserInfoContainer, UserName, UserProfileContainer, UserProfileContainers, UserProfileWrapper, UserProfileWrappers } from './styles';

const UsersProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('Created');
  const navigate = useNavigate();
  const { userId } = useParams();
  const { userProfile, removeUser } = useAuthStore();

  const randomImage = 'https://source.unsplash.com/1600x900/?nature,science,technology,photography';

  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query)
      .then((data) => {
        setUser(data[0]);
      })

  }, [userId]);

  useEffect(() => {
    if(text === 'Created'){
      const createdPinQuery = userCreatedPinsQuery(userId);
      client.fetch(createdPinQuery)
        .then((data) => {
          setPins(data)
        })
    }else{
      const savedPinQuery = userSavedPinsQuery(userId);
      client.fetch(savedPinQuery)
        .then((data) => {
          setPins(data)
        })
    }
  }, [text, userId])
  
  

  if(!userProfile) return <Spinner message='Loading profile...' />

  return (
    <UserProfileContainers>
      <UserProfileContainer>
        <UserProfileWrappers>
          <UserProfileWrapper>
            <UserBanner src={randomImage} alt='user-banner'/>
            <UserImage src={userProfile?.image} alt='user-profile' />
            <UserName>{userProfile?.userName}</UserName>
            {user?._id === userProfile?._id && (
              <LogoutContainer>
                <LogoutButton type='button' onClick={ () => { googleLogout(); removeUser(); navigate('/login')}} >
                  <Logout />
                </LogoutButton>
              </LogoutContainer>
            )}
          </UserProfileWrapper>
        </UserProfileWrappers>
        <UserInfoContainer>
         { activeBtn === 'Created' ? (
          <ActiveButton type='button' onClick={(e) => {setText(e.target.textContent); setActiveBtn('Created')}} >
            Created
        </ActiveButton>
         ):(
          <NotActiveButton type='button' onClick={(e) => {setText(e.target.textContent); setActiveBtn('Created')}} >
            Created
        </NotActiveButton>
         )}
         { activeBtn === 'Saved' ? (
          <ActiveButton type='button' onClick={(e) => {setText(e.target.textContent); setActiveBtn('Saved')}} >
            Saved
        </ActiveButton>
         ):(
          <NotActiveButton type='button' onClick={(e) => {setText(e.target.textContent); setActiveBtn('Saved')}} >
            Saved
        </NotActiveButton>
         )}
        </UserInfoContainer>
        {pins?.length > 0 ? (
        <UserInfo>
          <MasonryLayout pins={pins} />
        </UserInfo>
        ):(
          <NoPins>No Pins Found!</NoPins>
        )}
      </UserProfileContainer>
    </UserProfileContainers>
  )
}

export default UsersProfile;