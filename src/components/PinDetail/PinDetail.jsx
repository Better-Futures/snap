import React, { useEffect, useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';
import { v4 as uuidv4 } from 'uuid';

import { Spinner, MasonryLayout } from '../../components';
import useAuthStore from '../../store/useAuth';
import { pinDetailMorePinQuery, pinDetailQuery } from '../../utils/data';
import { UserName } from '../CreatePin/styles';
import { DownloadLink, Links } from '../Pin/styles';
import { CommentContainer, CommentContainers, CommentsContainer, CommentsContainers, CommentsWrapper, CommentTitle, CommentWrapper, ImageLink, PinDesc, PinDetailContainer, PinDetailWrapper, PinTitle, PostImage, PostUserContainer, PostUserName, ProfileImage, PinCommentContainer, UserImage, CommentInput, CommentButton, SimilarPinTitle } from './styles';

const PinDetail = () => {
  const [pins, setPins] = useState(null);
  const [pinDetails, setPinDetails] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams();
  const { userProfile } = useAuthStore();

  const addComment = () => {
    if(comment){
      client
        .patch(pinId)
        .setIfMissing({comments: []})
        .insert('after', 'comments[-1]', [{
          comment,
          _key: uuidv4(),
          postedBy: {
            _type: 'postedBy',
            _ref: userProfile._id
          }
        }])
      .commit()
      .then(() => {
        fetchPinDetail();
        setComment('');
        setAddingComment(true);
        window.location.reload()
      })
    }
  }
  const fetchPinDetail = () => {
    let query = pinDetailQuery(pinId);

    if (query) {
      client.fetch(query)
        .then((data) => {
            setPinDetails(data[0]);

            if(data[0]){
              query = pinDetailMorePinQuery(data[0])
              client.fetch(query)
                .then((res) => {
                  setPins(res)
                })
                
            }
        })
    } 
  }

  useEffect(() => {
    fetchPinDetail();
    
  });

  
  
  if(!pinDetails) return <Spinner message='Loading pin...' />

  return (
  <>
    <PinDetailContainer>
      <PinDetailWrapper>
        <UserImage src={pinDetails?.image && urlFor(pinDetails.image).url()} alt='user-post'/>
      </PinDetailWrapper>
      <CommentContainers>
        <CommentContainer>
          <CommentWrapper>
          <DownloadLink href={`${pinDetails?.image?.asset?.url}?dl=`} download onClick={(e) => e.stopPropagation()}>
              <MdDownloadForOffline />
             </DownloadLink>
              <ImageLink href={pinDetails.destination} target='_blank' rel='noreferrer'>
                {pinDetails.destination}
              </ImageLink>
          </CommentWrapper>
          <PinTitle>{pinDetails.title}</PinTitle>
          <PinDesc>{pinDetails.about}</PinDesc>
        </CommentContainer>
        <Links to={`/user-profile/${userProfile?._id}`}>
        <ProfileImage src={userProfile?.image} alt='user' />
        <UserName>{userProfile?.userName}</UserName>
      </Links>
      <CommentsContainers>
        <CommentTitle>Comment</CommentTitle>
        <CommentsContainer>
          {pinDetails?.comments?.map((comment, i) => (
            <CommentsWrapper key={i}>
              <PostImage src={comment.postedBy.image} alt='user-profile' />
              <PostUserContainer>
                <PostUserName>{comment.postedBy.UserName}</PostUserName>
                 <p>{comment.comment}</p>
              </PostUserContainer>
            </CommentsWrapper>
          ))}
        </CommentsContainer>
      </CommentsContainers>  
      <PinCommentContainer>
        <Link to={`/user-profile/${userProfile?._id}`}>
        <ProfileImage src={userProfile?.image} alt='user-profile' />
        </Link>
        <CommentInput type='text' placeholder='Add a comment' value={comment} onChange={(e) => setComment(e.target.value)} />
        <CommentButton type='button' onClick={addComment} >
          {addingComment ? 'Posting the comment...' : 'Post'}
        </CommentButton>
      </PinCommentContainer>
      </CommentContainers> 
    </PinDetailContainer>
    {pins?.length > 0 ? (
      <>
        <SimilarPinTitle>More like this</SimilarPinTitle>
        <MasonryLayout pins={pins} />
        </>
      ):(
        <Spinner message='Loading more pins...' />
      )}
    </>
  )
}

export default PinDetail;