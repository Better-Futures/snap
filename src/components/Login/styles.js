import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::before{
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
  }
`;

export const LoginVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LoginButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
 
`;

export const LoginButtonWrapper = styled.div`
  padding: 5px;
`;

export const LoginImage = styled.img`
  cursor: pointer;
  width: 130px;
  height: 80px;
  border-radius: 5px;
`;

export const LoginButton = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
`;


