import React from 'react';
import './Footer.css';

function Home() {
  
  window.scrollTo(0, 0);
  
  return (
    <div class='bg-dark'>
      <div class="screen-fit-home">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="Glitch.mp4" type="video/mp4"/>
        </video>
      </div>
      <div class='center-again'>
      <div class='bg-dark'>
        <div class="mt-4 p-5 text-white rounded">
          <div class="container mt-3">
            <img src='Me.jpeg'  alt='#' class='rounded-circle float-start image-pic ' />
          </div>
          <h1 class='body-text center-again'>Julian Stone</h1>
          <p class="center-again">The purpose of this web profile is to introduce myself, 
            showcase the skills I have to offer and to simplify the process of getting in touch for possible job opportunities.
          </p>
        </div>

      <div id="demo" class="carousel slide background-body " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner image-screen">
          <div class="carousel-item active">
            <img src="Image4.jpg" alt="Los Angeles" class="d-block image-screen" />
          </div>
          <div class="carousel-item">
           <img src="Image6.jpg" alt="Chicago" class="d-block image-screen" />
          </div>
          <div class="carousel-item">
            <img src="Image7.jpg" alt="New York" class="d-block image-screen" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    
      <div class='body-text'>
        <h4 class='center-again'>
          <br/>
          About
          <br/>
        </h4>
        <p class='center-again padding-btm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default Home;
