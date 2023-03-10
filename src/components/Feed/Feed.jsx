import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client';
import { Spinner, MasonryLayout } from '../../components';
import { feedQuery, searchQuery } from '../../utils/data';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {    
      const query = searchQuery(categoryId);
      client.fetch(query)
        .then((data) => {
            setPins(data);
            setLoading(false);
            
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
            setPins(data);
            setLoading(false);
            
        })
    }
  }, [categoryId]);
   console.log(pins)

  if(loading) return <Spinner message='We are adding new ideas to your feed!' />

  if(!pins?.length) return <h1>No Pins available</h1>

  return (
    <>{pins && <MasonryLayout pins={pins} />}</>
  )
}

export default Feed;