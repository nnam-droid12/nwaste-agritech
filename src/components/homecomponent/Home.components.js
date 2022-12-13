import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../carousel/carousel';
import weather from '../../assets/weather.jpg';
import pp1 from '../../assets/pp1.jpg';
import pp2 from '../../assets/pp2.jpg';
import pp3 from '../../assets/pp3.jpg';
import pp4 from '../../assets/pp4.jpg';
import { MdArrowRightAlt, MdShoppingCart } from "react-icons/md";
import nwaste from '../../assets/nwaste-app.jpeg';
import Header from '../header/Header';
import CustomButton from '../custombutton/CustomButton.component';
import Subscribe from '../newsletter/newletter';
import Footer from '../footer/Footer';
import './HomePage.scss';

const HomePage = (props) => {
    return(
        <div className='homepage'>
         <Header currentUser={props.currentUser} />
          <div className='container'>
              <div className='outer'>
                <div className='details'>
                    <h1>We help farmers get the most from harvest, connect the dot between farmers and buyers, quick access to soft loans and efficient storage system.</h1>
                    <p>Our Mission is Zero Hunger in 2030</p>
                    <a href='#guideline-content'>
                    <button 
                    className='get-started'>
                    <span className='get-started-btn'>Overview</span>
                    <span 
                    className="get-started-icon"
                    size='30px'
                    ><MdArrowRightAlt /></span>
                    </button>
                    </a>
                </div>
              </div>
          </div>
        
          
          {/* The beginning of service*/}
          <section className="service">
          <h1 className='horizontal-line service-title'><hr/>
              Our Services
          <hr/></h1>
            <div className="service-container">  
                <Link to='/signin'>
                    <div className="container-item">
                    <img src={pp4} className='img-style'/>
                    </div>
                </Link>
                <Link to=''>
                    <div className="container-item">
                    <img src={pp1} className='img-style'/>
                    </div>
                </Link>
                <Link to='/loan'>
                    <div className="container-item">
                    <img src={pp2} className='img-style'/>
                    </div>
                </Link>
                <Link to="/farmers">
                    <div className="container-item">
                    <img src={pp3} className='img-style'/>
                    </div>
                </Link>
        </div>
    </section>
    {/* end of the service */}
            
    {/* the beginning of user reviews */}
    <section className="review">
            <img 
            className='nwaste-app'
            src={nwaste}/>
            <div className='app-name'>
            <h1>THE GREATEST PRODUCT EVER CREATED</h1>
            <p className='card-text'>We help farmers get the most from harvest, connect the dot between farmers and buyers, quick access to soft loans and efficient storage system.</p>
                    <CustomButton
                        className='custom-btn custom-btn2'> Learn More 
                    </CustomButton>
            </div>
    </section>
        {/* the end of user reviews */}

        <section>
          <h1 className="horizontal-line guideline-tittle"><hr/>
              Our Products
              <hr/></h1>
           <Slider />
    </section>

        {/* future plan beginning */}
      <section className='future-plan'>
            <h3 className='horizontal-line future-center' ><hr/>Our Future Plan<hr/></h3>
        <div className='mission'>
            <p>Out of the Billions of food wasted every year, perishable foods have been identified to be the most paramount, which has been due to inefficient and uneffective method of preservation, as a result NWASTE plan to address this problem by creating the most effective preservation method as our mission strongly tie to this, which is zero hunger in 2030.</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgsj5dNoXh4EhBkYAP_SEDWDnJ3YRaQ-spg&usqp=CAU' alt='' ></img>
        </div>
        <div className='mission'>
          <p>
              As NWASTE  is committed to keeping to its future plan which is zero hunger in 2030, we plan to help farmers with crop data decision, what deos this mean? Based on the crop the farmer wish to plant in a particular season, farmers get to know if their crop is compartible with the soil type and weather condition before, during and after planting. But for the mean time our solution solely address soil type, soil moisture and temperatue.
            </p>
              <img src={weather} alt='' />
        </div>
      </section>
      {/* future plan ending */}
      <section>
        <Subscribe />
      </section>
      <Footer />
    </div>
    );
}

export default HomePage;