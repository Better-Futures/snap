import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client, urlFor } from '../../client';
import { MdDownloadForOffline } from 'react-icons/md';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { AiTwotoneDelete } from 'react-icons/ai';
import useAuthStore from '../../store/useAuth';
import { v4 as uuidv4 } from 'uuid';

import { DeleteButton, DestinationLink, DownloadIconContainer, DownloadLink, HoveredBottomWrapper, HoveredContainer, HoveredTopWrapper, Image, Links, PinContainer, PinWrapper, SaveButton, UserImage, UserName } from './styles';

const Pin = ({ pin: { postedBy, image, _id, destination, save }}) => {
    const [postHovered, setPostHovered] = useState(false);
    const navigate = useNavigate();
    const {userProfile} = useAuthStore();
    const alreadySaved = !!(save?.filter((post) => post?.postedBy?._id === userProfile?._id))?.length;

  const savePin = (id) => {
    if (!alreadySaved) {
      client
        .patch(id)
        .setIfMissing({save: []})
        .insert('after', 'save[-1]', [{
          _key: uuidv4(),
          userId: userProfile._id,
          postedBy: {
            _type: 'postedBy',
            _ref: userProfile._id
          }
        }])
        .commit()
        .then(() => {
          window.location.reload();
        })
    } 
  }

  const deletePin = (id) => {
    client
     .delete(id)
     .then(() => {
      window.location.reload();
    })
    
  }

  return (
    <PinContainer>
      <PinWrapper
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/pin-detail/${_id}`)}
      >
        <Image src={urlFor(image).width(250).url()} alt='user-post' />
        {postHovered && (
          <HoveredContainer>
            <HoveredTopWrapper>
              <DownloadIconContainer>
                <DownloadLink href={`${image?.asset?.url}?dl=`} download onClick={(e) => e.stopPropagation()}>
                  <MdDownloadForOffline />
                </DownloadLink>
              </DownloadIconContainer>
              {alreadySaved ? (
                  <SaveButton type='button'>{save?.length} Saved</SaveButton>
                ):(
                  <SaveButton
                    type='button'
                    onClick={(e) => {e.stopPropagation(); savePin(_id)}}                   
                  >
                   Save
                  </SaveButton>
                )}
            </HoveredTopWrapper>
            <HoveredBottomWrapper>
              {destination && (
                <DestinationLink href={destination} target='_blank' rel='noreferrer'>
                  <BsFillArrowUpRightCircleFill style={{marginRight: '2px'}} />
                  {destination.slice(0, 20)}
                </DestinationLink>
              )}
              {postedBy?._id === userProfile?._id && (
                <DeleteButton 
                  type='button'
                  onClick={(e) => {e.stopPropagation(); deletePin(_id)}} 
                >
                  <AiTwotoneDelete />
                </DeleteButton>
              )}
            </HoveredBottomWrapper>
          </HoveredContainer>
        )}
      </PinWrapper> 
      <Links to={`/user-profile/${postedBy?._id}`}>
        <UserImage src={postedBy?.image} alt='user' />
        <UserName>{postedBy?.userName}</UserName>
      </Links>    
    </PinContainer>
  )
}

export default Pin;

