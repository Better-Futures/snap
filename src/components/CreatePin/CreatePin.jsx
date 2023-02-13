import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { CreatePinContainer, DeleteButton, Erro, FileUploadDetail, ImageUpload, ImageUploadContainer, ImageUploadIcon, ImageUploadInput, ImageUploadText, ImageUploadTexts, ImageUploadWrapper, SelectContainer, CategoryWrapper, ShowImageUploadContainer, TextInput, UploadBoxContainer, UploadBoxContainers, UploadBoxWrapper, UserContainer, UserImage, UserName, CategoryContainer, CategoryTitle, SelectOption, SelectOptions, UploadButtonContainer, UploadButton } from './styles';
import { Spinner } from '../../components';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { categories } from '../../utils/data';
import { client } from '../../client';
import { MdDelete } from 'react-icons/md';
import useAuthStore from '../../store/useAuth';

const CreatePin = () => {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [destination, setDestination] = useState('');
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState(false);
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [wrongImageType, setWrongImageType] = useState(false);
    const [showUpload, setShowUpload] = useState(true)

    const navigate = useNavigate();
    const { userProfile } = useAuthStore();

    const uploadImage = (e) => {
       const selectedFile =  e.target.files[0];
       const fileType = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg', 'image/tiff', 'image/svg' ];

       if(fileType.includes(selectedFile.type)){
        setWrongImageType(false);
        setLoading(true);
        setShowUpload(false);
        client.assets
          .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
          .then((data) => {
            setImageAsset(data);
            setLoading(false);
          })
          .catch((error) => console.log('Image upload error', error))
        }else{
          setWrongImageType(true);
        }
    }

    const savePin = () => {
      if(title && about && imageAsset?._id && destination && category ){

        const doc ={
          _type: 'pin',
          title,
          about,
          destination,
          image: {
            type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id
            }
          },
          userId: userProfile._id,
          postedBy: {
            _type: 'postedBy',
            _ref: userProfile._id
          },
          category
        }

        client.create(doc)
          .then(() => {
            navigate('/')
          })
      }else{
        setFields(true)
        setTimeout(() => setFields(false), 2000)
      }
    }

  return (
    <CreatePinContainer>
      {fields && (
        <Erro>Please fill out all fields!</Erro>
      )}
      <UploadBoxContainers>
        <UploadBoxContainer>
          <UploadBoxWrapper>
            {loading && <Spinner message='Loading image...' />}
            {wrongImageType && <Erro>Wrong image type</Erro>}
            {!imageAsset ? (
              showUpload && (
              <label>
                <ImageUploadContainer>
                  <ImageUploadWrapper>
                     <ImageUploadIcon>
                       <AiOutlineCloudUpload />
                     </ImageUploadIcon> 
                     <ImageUploadText>Click to upload</ImageUploadText>  
                  </ImageUploadWrapper>
                  <ImageUploadTexts>Use  high-quality JPG, SVG, PNG, TIFF less than 20MB</ImageUploadTexts>
                </ImageUploadContainer>
                <ImageUploadInput 
                   type='file'
                   name='upload-image'
                   onChange={uploadImage}
                 />
              </label>
              )
            ):(
              <ShowImageUploadContainer> 
                <ImageUpload src={imageAsset?.url} alt='image-upload' />
                <DeleteButton type='button' onClick={() => setImageAsset(null)}>
                  <MdDelete />
                </DeleteButton>
              </ShowImageUploadContainer>
            )}
          </UploadBoxWrapper>
        </UploadBoxContainer>
        <FileUploadDetail>
          <TextInput type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Add your title here'/>
          {userProfile && (
            <UserContainer>
              <UserImage src={userProfile.image} alt='user-pofile' />
              <UserName>{userProfile.userName}</UserName>
            </UserContainer>
          )}
          <TextInput type='text' value={about} onChange={(e) => setAbout(e.target.value)} placeholder='What is you pin about'/>
          <TextInput type='text' value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='Add your destination link'/>
          <CategoryContainer>
            <CategoryWrapper>
              <CategoryTitle>Choose Pin Category</CategoryTitle>
              <SelectContainer onChange={(e) => setCategory(e.target.value)}>
                <SelectOption value='other'>Select Category</SelectOption>
                {categories.map((item, i) => (
                  <SelectOptions value={item.name} key={i}>{item.name}</SelectOptions>
                ))}
              </SelectContainer>
            </CategoryWrapper>
            <UploadButtonContainer>
              <UploadButton type='button' onClick={savePin}>
                  Save 
              </UploadButton>
            </UploadButtonContainer>
          </CategoryContainer>
        </FileUploadDetail>
      </UploadBoxContainers>
    </CreatePinContainer>
  )
}

export default CreatePin;