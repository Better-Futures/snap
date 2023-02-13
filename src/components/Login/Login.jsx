import React from 'react'
import { LoginButton, LoginButtonContainer, LoginButtonWrapper, LoginContainer, LoginImage, LoginVideo, LoginWrapper } from './styles';
import snapVideo from '../../assets/share.mp4';
import logo from '../../assets/snap.png';
import { GoogleLogin } from '@react-oauth/google';
import useAuthStore from '../../store/useAuth';
import jwtDecode from 'jwt-decode';
import { client } from '../../client';
import { useNavigate } from 'react-router';

const Login = () => {
    const { addUser } = useAuthStore();
    const navigate = useNavigate();

    const createOrGetUser = (res, addUser) => {
        const decode = jwtDecode(res.credential);
        console.log(decode);
        const {sub, picture, name} = decode;
        const doc = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture
        }

        addUser(doc);
        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', {replace: true})
            })
    };

  return (
    <LoginContainer>
        <LoginWrapper>
            <LoginVideo src={snapVideo} autoPlay muted controls={false} loop />
            <LoginButtonContainer>
                <LoginButtonWrapper>
                    <LoginImage src={logo} alt='logo' />
                </LoginButtonWrapper>
                <LoginButton>
                    <GoogleLogin 
                        onSuccess={(res) => createOrGetUser(res, addUser)}
                         onError={ (e) => console.log(e)}   
                        />
                </LoginButton>
            </LoginButtonContainer>
        </LoginWrapper>
    </LoginContainer>
  )
}

export default Login;
