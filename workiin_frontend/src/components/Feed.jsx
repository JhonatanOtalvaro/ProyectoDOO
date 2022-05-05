import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import { InfinitySpin } from 'react-loader-spinner';


const Feed = () => {
  const [loading, setloading] = useState(true);

  if(loading) return <InfinitySpin message="Cargando los Perfiles."/>

  return (
    <div>Feed</div>
  )
}

export default Feed