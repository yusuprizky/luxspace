import React from 'react';
import { Link } from 'react-router-dom'
import Header from "parts/Header";
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';
import PageErrorMessage from 'parts/PageErrorMessage';


export default function NotFound() {
  return (
    <><Header theme="black" />
    
    <PageErrorMessage />

    <Sitemap />
    <Footer />
    </>
  )
}
