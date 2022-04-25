import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DetailMain from '../Components/DetalPage/DetailMain'
import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'
import Detail from '../Components/Page/Detail'
import ListingCreate from '../Components/Page/ListingCreate'
import Signin from '../Components/Signin/Signin'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/listing/create' element={<ListingCreate />} />
        <Route path='/listing/:id' element={<DetailMain />} />
        <Route path='/detail' element={<Detail />} />
    </Routes>
  )
}

export default AllRoutes