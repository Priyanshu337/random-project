// URL for USer = https://jsonplaceholder.typicode.com/users
import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NamePage from './pages/NamePage';
import CommentPage from './pages/CommentPage';
import ImagePage from './pages/ImagePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './Layout/Navbar';

function App() {

  const [value, setValue] = useState<any>({});
  console.log("parent", value);

  return (
    <>
      <div >
        <BrowserRouter>
          <Navbar />

          <div className='flex-container-1'>
            <Routes>

              <Route path="/Home" element={< HomePage />} />
              <Route path="/Users" element={< NamePage value={value} setValue={setValue} />} />
              <Route path="/Images" element={< ImagePage value={value} />} />
              <Route path="/Comments" element={< CommentPage value={value} />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App



