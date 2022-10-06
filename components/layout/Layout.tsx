import React from 'react';
import Navbar from './Navbar' 
import Footer from './Footer' 

interface IPageProps{
    children: React.ReactNode;
}

const Layout = ({ children }:IPageProps) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;