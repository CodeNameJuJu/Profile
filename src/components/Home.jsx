import React from 'react';
import './Main.css';

export default function Home() {

  window.scrollTo(0, 0);

  return (
    <div class='container-fluid'>
      <div class='center-again'>
        <div class='bg-dark'>
          <div class="mt-4 p-5 text-white rounded">
            <div class="container mt-3">
              <img src='Me.jpeg' alt='#' class='rounded-circle float-start image-pic ' />
            </div>
            <h1 class='body-text center-again'>Julian Stone</h1>
            <p class="center-again">The purpose of this web profile is to introduce myself,
              showcase the skills I have to offer and to simplify the process of getting in touch for possible job opportunities.
            </p>
          </div>

          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="carousel3.jpg" class="d-block w-100 image-screen" alt="#" />
              </div>
            </div>
          </div>

          <div class='body-text'>
            <h4 class='center-again'>
              <br />
              Julian Stone - About me
              <br />
            </h4>
            <p class='center-again padding-btm'>
              As a junior software developer, I am highly motivated and have a passion for crafting elegant solutions to complex problems in the world of technology.
              <br />
              <br />
              With over a year of hands-on experience in software development, I have contributed to the creation of user-friendly web applications and software solutions. I've been part of dynamic teams that have successfully delivered projects on time and within budget.
              <br />
              <br />
              My skills include proficiency in programming languages such as C#, JavaScript, and PHP. I also possess strong problem-solving and analytical abilities.
              <br />
              <br />
              The ever-evolving field of software development really excites me, and I thrive on the challenge of turning innovative ideas into practical solutions. My goal is to continue honing my skills, collaborating with talented teams, and contributing to cutting-edge projects that make a positive impact.
              <br />
              <br />
              I hold a NQF 5 certificate in IT Systems Development from CTU Training Solutions, where I gained a solid foundation in software development principles. Additionally, I am certified in Agile Development methodologies from JustSolve Solutions, enhancing my ability to adapt and excel in fast-paced development environments.
              <br />
              <br />
              Outside of my professional life, I enjoy spending time with friends and family, playing video games on occasion, staying updated with the latest tech trends, and experimenting with new coding languages. I believe in the importance of work-life balance and strive to maintain a healthy equilibrium.
              <br />
              <br />
              I am excited about the opportunity to collaborate with forward-thinking teams, leverage my technical skills, and contribute to the development of innovative software solutions. I am convinced that I can be a valuable asset to your organization. I would appreciate you reaching out to me to discuss.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}
