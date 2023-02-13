import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  height: 100vh;
  overflow-y: scroll;
  min-width: 210px;
  &::-webkit-scrollbar{
    display: none;
  }
  &:hover{
    &::-webkit-scrollbar{
    display: block;
  }
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  padding: 6px 5px;
  padding-top: 1px;
  width: 190px;
  align-items: center;
`;
 
export const SidebarImage = styled.img`
  width: 100px;
  height: 50px;
  margin-bottom: 10px;
  
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0 5px;
    margin: 0 0 20px 0;
    color: #000;
    background: rgba(255, 255, 255, 0.6);
    &:hover{
        color: #000;
        transition: all 0.7s ease-in-out;
        text-transform: capitalize;
    }
    &.active{
        font-weight: bold;
        border-right: 2px solid #000;
        transition: all 0.2s ease-in-out;
        text-transform: capitalize;
    }
`;

export const Heading = styled.h1`
  margin-top: -8px;
  margin-bottom: 18px;
  padding: 0 5px;
  font-weight: 500;
  font-size: x-large;
`;

export const Links = styled(Link)`
  display: flex;
  margin: 60px 1px 0px 3px;
  padding: 2px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  background: #fff;
  font-size: small;
  align-items: center;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  @media screen and (max-width: 768px){
    margin: 50px 1px 0px 3px;
  }
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 3px;
`;

