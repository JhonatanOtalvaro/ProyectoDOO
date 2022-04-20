import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import {Sidebar, UserProfile} from '../components';
import { client } from '../client';
import logo from '../assets/logo.png';



const Home = () => {
  return (
    <div>
      Inicio
    </div>
  )
}

export default Home