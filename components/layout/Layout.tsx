import React from 'react';
import Navbar from './Navbar' 

interface IPageProps{
    children: React.ReactNode;
}

const Layout = ({ children }:IPageProps) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;