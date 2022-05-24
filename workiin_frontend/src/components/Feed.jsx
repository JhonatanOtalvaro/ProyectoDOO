import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import { InfinitySpin } from 'react-loader-spinner';
import { feedQuery, searchQuery } from '../utils/data';


const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setloading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setloading(true);
    if(categoryId){
      const query = searchQuery(categoryId);
    }else{
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setloading(false);
        })
    }
  }, [categoryId]);

  if(loading) return <InfinitySpin message="Cargando los Perfiles."/>

  return (
    <div>
      {pins && <MasonryLayout pins= {pins}/>}
    </div>
  )
}

export default Feed