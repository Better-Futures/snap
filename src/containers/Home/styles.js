import styled, { keyframes } from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenu}from 'react-icons/hi';

export const HomeContainer = styled.div`
  display: flex;
  background: #e1e1e1;
  flex-direction: row;
  height: 100vh;
  transition: all 0.75s ease-out;
  @media screen and (max-width: 768px){
    flex-direction: column
  }
`;

export const DeskstopSidebar = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: inherit;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const MobileSidebar = styled.div`
  display: none;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: row
  }
`;

export const MobileSidebarWrapper = styled.div`
  display: flex;
  padding: 2px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
`;

export const MobileMenuIcon = styled(HiMenu)`
  cursor: pointer;
  font-size: 40px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 50px;
  border-radius: 5px;
`;
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;


const slideIn = keyframes`
0%{
      transform: translateX(-200px);
    }
   100%{
    transform: translateX(0px);
   } 
`;

export const ToggleSidebarContainer = styled.div`
  position: fixed;
  display: flex;
  width: 80%;
  background: #fff;
  height: 100vh;
  overflow-y: auto;
  box-shadow: 0 0 2.5px rgba(0, 0, 0, 0.9);
  z-index: 10;
  animation: ${slideIn};
`;

export const ToggleSidebarWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2px;
`;

export const CloseSidebar = styled(AiFillCloseCircle)`
  font-size: 30px;
  cursor: pointer;
`;

export const RouterContainer = styled.div`
  padding-bottom: 2px;
  flex: 1px;
  height: 100vh;
  overflow-y: scroll;
`;

