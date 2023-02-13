import styled from 'styled-components';

export const CreatePinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 100%;
`;

export const Erro = styled.p`
  color: #ff0000;
  margin-bottom: 5px;
  font-size: large;
  transition: all 1.5s ease-in;
`;

export const UploadBoxContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 3px;
  width: 100%;
`;

export const UploadBoxContainer = styled.div`
  background: #f0f0f0;
  padding: 3px;
  display: flex;
  flex: 0.7;
  width: 100%;
`;

export const UploadBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dotted #ddd;
  padding: 3px;
  width: 100%;
  height: 320px;
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageUploadIcon = styled.p`
  font-weight: bold;
  font-size: xx-large;
  
`;

export const ImageUploadText = styled.p`
  font-size: medium;
`;

export const ImageUploadTexts = styled.p`
  margin-top: 32px;
  color: #aaa;
`;

export const ImageUploadInput = styled.input`
  width: 0;
  height: 0;
`;


export const ShowImageUploadContainer = styled.div`
    position: relative;
    height: 100%;
`;

export const ImageUpload = styled.img`
  width: 100%;
  height: 100%;
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 3px;
  right: 3px;
  padding: 3px;
  border-radius: 50%;
  background: #fff;
  font-size: x-large;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease-in-out;
  &:hover{
    box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.7);
  }
`;

export const FileUploadDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 6px;
  padding-left: 3px;
  margin-top: 15px;
  width: 100%;
`;

export const TextInput = styled.input`
  border: 2px solid #ddd;
  margin-bottom: 16px;
  padding: 4px;
`;

export const UserContainer = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: x-small;
  margin-left: 4px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.p`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: large;
`;

export const SelectContainer = styled.select`
  outline: none;
  width: 80%;
  border-bottom: 2px solid #e1e1e1;
  border-radius: 5px;
  cursor: pointer;
`;

export const CategoryWrapper = styled.div`
  
`;

export const SelectOption = styled.option`
  background: #fff;
`;

export const SelectOptions = styled.option`
  border: 0;
  outline: none;
  color: #000;
  text-transform: capitalize;
`;

export const UploadButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 5px;
`;

export const UploadButton = styled.button`
  background: #ff0000;
  color: #fff;
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover{
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.9);
  }
`;
