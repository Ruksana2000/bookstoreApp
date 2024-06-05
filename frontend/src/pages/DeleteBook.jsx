import React, { useState } from 'react'
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar;
  const handleDeleteBook = () => {
     setLoading(true);
     axios 
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success'})
        navigate('/');
      })
      .catch((error)=> {
        setLoading(false);
       // alert('An error happened. Please check console');
        enqueueSnackbar(`Error`, {variant: `error`})
        console.log(error)
      })
  };
  return (
    <div className='p-4'>
     <BackButton />
    <h1 className='text-3xl my-8'>Edit Book</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-400 rounder-xl w-[600px] p-4 mx-auto'>
    <h3 className='text-2xl'>Are you sure You want to delete this book</h3>
    <button className='p-4 bg-red-600 text-white m-8' onClick={handleDeleteBook}>
      Yes, I delete it 
    </button>
    </div>
    </div>
  )
}

export default DeleteBook