import styled from 'styled-components';
import { AiOutlineLogout } from 'react-icons/ai';

export const UserProfileContainers = styled.div`
  position: relative;
  padding-bottom: 2px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`;

export const UserProfileWrappers = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 7px;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserBanner = styled.img`
  width: 100%;
  height: 370px;
  object-fit: cover;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: -30px;
  object-fit: cover;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  margin-top: 3px;
`;

export const LogoutContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  right: 0;
  padding: 2px;
`;

export const LogoutButton = styled.div`
  background: #fff;
  padding: 2px 2px 0 2px;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 2.3px rgba(0, 0, 0, 0.9);
`;

export const Logout = styled(AiOutlineLogout)`
  color: #ff0000;
  font-size: 40px;
`;

export const UserInfoContainer = styled.div`
  text-align: center;
  margin-bottom: 7px;
`;

export const ActiveButton = styled.button`
  background: #ff0000;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 15px;
  margin-right: 10px;
  outline: none;
  border: none;
  `;

export const NotActiveButton = styled.button`
  background: #fafafa;
  color: #000;
  margin-right: 10px;
  font-weight: bold;
  padding: 10px;
  border-radius: 15px;
  outline: none;
  border: none;
`;

export const NoPins = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  width: 100%;
  font-size: x-large;
  margin-top: 2px;
`;

export const UserInfo = styled.div`
  padding: 0 2px;
`;

