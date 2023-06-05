import React from 'react';
import About from '../components/About';
import Article from '../components/Article';
import Articles from '../components/Articles';
import Author from '../components/Author';
import Categories from '../components/Categories';
import Category from '../components/Category';
import EditProfileForm from '../components/EditProfileForm';
import Profile from '../components/Profile';
import Root from '../components/Root';
import SignUp from '../components/SignUp';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    /* Wrap this Root Route to create Router here */
    <Route path='/' element={<Root />}>
      {/* Add Routes here! */}
      <Route path='about' element={<About />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='articles' element={<Articles />} />
      <Route path='articles/:title' element={<Article />} />
      <Route path='categories' element={<Categories />}>
        <Route path=':name' element={<Category />} />
      </Route>
      <Route path='profile' element={<Profile />}>
        <Route path='edit' element={<EditProfileForm />} />
      </Route>
      <Route path='authors/:name' element={<Author />} />
    </Route>
  )
);

function App() {
  return (
    <>
      {/* Replace below and add Router Provider*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
