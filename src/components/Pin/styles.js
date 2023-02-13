import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PinContainer = styled.div`
  margin: 2px;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
`;

export const PinWrapper = styled.div`
  position: relative;
  cursor: zoom-in;
  width: auto;
  border-radius: 5px;
  overflow: hidden;
  transition:  all 0.75s ease-in-out;
`;

export const HoveredContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-Content: space-between;
  padding: 1px;
  padding-right: 2px;
  padding-top: 2px;
  padding-bottom: 2px;
  z-index: 50;
`;

export const HoveredTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DownloadIconContainer = styled.div`
  display: flex;
  margin-left: 2px;
`;

export const DownloadLink = styled.a`
  background: #fff;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: x-large;
  opacity: 0.7;
  &:hover{
    opacity: 1;
    outline: none;
  }
`;

export const SaveButton = styled.button`
  background: #ff0000;
  opacity: 0.7;
  color: #fff;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 3px; 
  border: none;
  outline: none;
  &:hover{
    outline: none;
    opacity: 1;
    box-shadow: inset 0 0 2.5px rgba(225, 225, 225, 0.8);
  }
`;

export const HoveredBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2px;
  margin-bottom: 4px;
  width: 100%;
`;

export const DestinationLink = styled.a`
  background: #fff;
  display: flex;
  align-items: center;
  color: #000;
  font-weight: bold;
  padding: 3px;
  padding-left: 4px;
  text-decoration: none;
  padding-right: 4px;
  border-radius: 16px;
  opacity: 0.7;
  &:hover{
    opacity: 1;
    box-shadow: inset 0 0 1.5px rgba(255, 255, 255, 0.7);
  }
`;

export const DeleteButton = styled.button`
  background: #fff;
  opacity: 0.7;
  font-weight: bold;
  margin-right: 3px;
  padding: 4px;
  color: #000;
  border-radius: 20px; 
  border: none;
  outline: none;
  &:hover{
    outline: none;
    opacity: 1;
    box-shadow: inset 0 0 2.5px rgba(255, 255, 255, 0.8);
  }
`;

export const Links = styled(Link)`
  display: flex;
  margin-top: 4px;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  font-size: small;
  color: #000;
  margin-left: 5px;
`;

