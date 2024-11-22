import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blogs  from './pages/Blogs'
import WishList from './pages/WishList'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import Blog from './pages/Blog'
import SingleProduct from './pages/SingleProduct'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-store" element={<OurStore />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="login" element={<Login />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="single-product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App