import React, { useState, useEffect } from 'react';

import { Spinner, MasonryLayout } from '../../components';
import { client } from "../../client";
import { SearchContainer } from './styles';
import { feedQuery, searchQuery } from '../../utils/data';

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(searchTerm){
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      
      client.fetch(query)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
    }else{
      setLoading(true);
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
    }
  }, [searchTerm])
  

  return (
    <>
      {loading && <Spinner message= 'Searching for pins...' />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== '' && !loading && (
        <SearchContainer>No Pins Found!</SearchContainer>
      ) }
    </>
  )
}

export default Search