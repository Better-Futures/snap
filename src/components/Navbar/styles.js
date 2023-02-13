import styled from 'styled-components';
import { IoMdSearch} from 'react-icons/io';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  margin-left: 5px;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 7px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 2px 0;
  background: #fff;
  border-radius: 5px;
 @media screen and (max-width: 768px){
  margin-right: 3px;
 }
`;

export const SearchIcon = styled(IoMdSearch)`
  font-size: 21px;
  margin-left: 1px;
`;

export const SearchInput = styled.input`
  padding: 2px;
  width: 100%;
  border-radius: 5px;
  background: #fff;
  border: none;
  &:focus{
    outline: none;
  }
  
`;

export const NavRightContainer = styled.div`
  display: flex;
  margin-left: 3px;
`;

export const UserImage = styled.img`  
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 3px;
`;

export const Links = styled(Link)`
  display: block;
  @media screen and (max-width: 768px){
      display: none;
  }
`;

export const CreatePinIconLink = styled(Link)`
  background: #000;
  color: #fff;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 24px;
    height: 24px;
  }
`;

