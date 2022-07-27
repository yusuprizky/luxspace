import React from 'react';
import Header from "parts/Header";
import Breadcrumb from 'components/Breadcrumb'
// import BrowseRoom from 'parts/HomePage/BrowseRoom';
// import JustArrived from 'parts/HomePage/JustArrived';
import Clients from 'parts/Clients';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';

export default function HomePage() {
  return (
    <>
    <Header />
    
    <Breadcrumb 
    list={[
        { url: "/", name: "Home"},
        { url: "/categories/91231", name: "Office Room"},
        { url: "/categories/91231/products/7888", name: "Details"}
    ]}
    />

    <Clients />
    <Sitemap />
    <Footer />
    </>
  );
}
