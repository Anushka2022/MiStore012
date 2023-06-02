
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Prenavbar from './components/Prenavbar';
import {  BrowserRouter as Router,Route, BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router-dom';
// import {
//   BrowserRouter as
//   Routes,
//   Route
// } from "react-router-dom";
import Slider from "./components/Slider.js";
import Banner from "./data/data.json";
import Offers from "./components/Offers"
import data from "./data/data.json";
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import HotItemCard from './components/HotItemCard';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Footer from './components/Footer';
// import NavOptios from "./components/NavOptios.js"




function App() {
  return (
    <BrowserRouter>
    {/* <Routes> */}
         <Prenavbar/>
         <Navbar />
              
          {/* <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/> */}
  
  
         <Slider start={data.banner.start} />
         <Offers offer={data.offer} />
         <Heading text="STAR PRODUCTS"/>
         <StarProduct starProduct={data.starProduct} />
         <Heading text="HOT ACCESSORIES" />
         <HotAccessoriesMenu />
  
         
  
         
     <Routes>
         <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
     </Routes>

     <Routes>
     <Route exact path="/smartDevice" element={
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />} />
       
     </Routes>

     <Routes>
      <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>

      </Route>
     </Routes>

     <Routes>
      <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
}>

      </Route>
     </Routes>

     <Routes>
      <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
}>

      </Route>
     </Routes>

     <Heading text="PRODUCT REVIEWS"/>
     <ProductReviews productReviews={data.productReviews}/>

      <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
      {/* <Banner  banner={data.banner}/> */}
      

       <Footer footer={data.footer} />

     </BrowserRouter>
  
    );
}

export default App;




