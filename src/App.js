import './App.css';
import React from 'react';
import UsersList from './component/UsersList';
import {  Routes, Route } from 'react-router-dom';
import Profile from './component/Profile';
import Post from './component/Post';

function App() {
  return (
    <div>
    <Routes>
     
        <Route exact path="/" element={<UsersList />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
     
    </Routes>
    </div>
  );
}

export default App;