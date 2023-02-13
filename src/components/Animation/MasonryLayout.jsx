import React from 'react'
import Masonry from 'react-masonry-css';
import styled, {keyframes} from 'styled-components';

import { Pin } from '..';

const slidefwd = keyframes`
  0%{
      transform: translateZ(0px);
  }
  100%{
    transform: translateZ(160px);
  }
  `;

const Masonrys = styled(Masonry)`
  display: flex;
  animation: ${slidefwd};
`;



const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1
}

const MasonryLayout = ({pins}) => {
  return (
    <Masonrys breakpointCols={breakpointObj} >
      {pins?.map((pin) => 
        <Pin key={pin._id} pin={pin} style={{width: '100%'}} />
      )}
    </Masonrys>
  )
}

export default MasonryLayout;