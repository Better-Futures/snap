import React, { useState } from 'react'
import { Route, Routes } from 'react-router';

import { PinsContainer, PinsWrapper, Routers } from './styles';
import { Feed, Navbar, PinDetail, Search, CreatePin } from '../../components';

const Pins = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <PinsContainer>
      <PinsWrapper>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </PinsWrapper>
      <Routers>
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/category/:categoryId' element={<Feed/>} />
          <Route path='/pin-detail/:pinId' element={<PinDetail />} />
          <Route path='/create-pin' element={<CreatePin/>} />
          <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </Routers>
    </PinsContainer>
  )
}

export default Pins