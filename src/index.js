import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchPosts } from './features/posts/postSlice';
import { fetchUsers } from './features/users/usersSlice';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </Provider>
  </React.StrictMode>
);

