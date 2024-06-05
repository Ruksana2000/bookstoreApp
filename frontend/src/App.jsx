import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBook from './pages/CreateBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import EditBook from './pages/EditBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import HomeBook from './pages/HomeBook.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeBook />} />     
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
