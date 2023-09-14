import React from 'react';
import './Main.css';

function Home() {
  
  window.scrollTo(0, 0);
  
  return (
    <div class='bg-black'>
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
          Julian Stone - About me
          <br/>
        </h4>
        <p class='center-again padding-btm'>
          I am a highly motivated junior software developer with a passion for crafting elegant solutions to complex problems in the world of technology.
          <br/>
          <br/>
          With over a year of hands-on experience in software development, I have contributed to the creation of user-friendly web applications and software solutions. I've been part of dynamic teams that have successfully delivered projects on time and within budget.
          <br/>
          <br/>
          My skills include proficiency in programming languages such as C#, JavaScript, and PHP. I also possess strong problem-solving and analytical abilities.
          <br/>
          <br/>
          I am passionate about the ever-evolving field of software development, and I thrive on the challenge of turning innovative ideas into practical solutions. My goal is to continue honing my skills, collaborating with talented teams, and contributing to cutting-edge projects that make a positive impact.
          <br/>
          <br/>
          I hold a NQF 5 certificate in IT Systems Development from CTU Training Solutions, where I gained a solid foundation in software development principles. Additionally, I am certified in Agile Development methodologies from JustSolve Solutions, enhancing my ability to adapt and excel in fast-paced development environments.
          <br/>
          <br/>
          Outside of my professional life, I enjoy staying updated with the latest tech trends, and experimenting with new coding languages. I believe in the importance of work-life balance and strive to maintain a healthy equilibrium.
          <br/>
          <br/>
          I am excited about the opportunity to collaborate with forward-thinking teams, leverage my technical skills, and contribute to the development of innovative software solutions. I am convinced that I can be a valuable asset to your organization. I would appreciate you reaching out to me to discuss.
        </p>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default Home;
