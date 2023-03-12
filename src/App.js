import React from 'react';
import './App.css';
import { Counter } from './features/counter/Counter';
import AddPostForm from './features/posts/addPostForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import { Route,Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<PostsList />} />
    
      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />


      </Route>

    </Route>
  </Routes>
  );
}

export default App;

//npm i date-fn
// npm i react-router-dom