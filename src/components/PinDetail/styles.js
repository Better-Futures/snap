import styled from 'styled-components';

export const PinDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #fff;
  max-width: 1500px;
  border-radius: 20px;
  
`;

export const PinDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: initial;
`;

export const UserImage = styled.img`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 50%;
  height: 340px;
`;

export const CommentContainers = styled.div`
  width: 100%;
  padding: 5px;
  flex: 1;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2px;
`;

export const ImageLink = styled.a`
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

export const PinTitle = styled.h1`
  font-size: x-large;
  font-weight: bold;
  word-break: break-all;
  margin-top: 3px;
`;

export const PinDesc = styled.p`
  margin-top: 3px;
`;

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const CommentsContainers = styled.div`
  display: flex;
  margin-bottom: 2px;
  flex-direction: column;
  margin-top: 5px;
  background: #fff;
  border-radius: 5px;

`;

export const CommentTitle = styled.h2`
  margin: 10px 0;
  font-size: x-large;
`;

export const CommentsContainer = styled.div`
  max-height: 370px;
  overflow-y: auto;
  margin-bottom: 18px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  margin-right: 2px;
  margin-top: 5px;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

export const PostImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5px;
`;

export const PostUserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostUserName = styled.p`
  font-weight: bold;
  font-size: small;
`;

export const PinCommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;
  margin-right: 3px;
`;

export const CommentInput = styled.input`
  display: flex;
  border: 2px solid #eee;
  padding: 2px;
  border-radius: 10px;
  &:focus{
    outline: none;
    border: 2px solid #e1e1e1;
  }
`;

export const CommentButton = styled.button`
  background: #ff0000;
  color: #fff;
  border-radius: 10px;
  padding: 1px 16px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;

export const SimilarPinTitle = styled.h1`
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 4px;
`;


