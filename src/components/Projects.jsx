import React from 'react';
import './Footer.css';

function Projects() {
  
  window.scrollTo(0, 0);
  
  return (
  <body class='body-text center-again'>
      <div class="center-again container mt-3">
    <h2>Project</h2>
    <p>Find a list of projects and links to respective projects below:</p>     

    <table class="table table-dark table-striped table-active table-hover table-responsive shadow p-3 mb-5 rounded">
      <thead class='table-dark'>
        <tr>
          <th title='Repository Name'><i class='bx bx-git-repo-forked' ></i>Repository Name</th>
          <th title='Language used'><i class='bx bx-code-block'></i>Language used</th>
          <th title='URL'><i class='bx bx-link'></i>URL</th>
          <th title='Date started'><i class='bx bxs-calendar'></i>Date started</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td title='Repository Name'><strong>School Projects</strong></td>
          <td title='C#'></td>
          <td title='URL'></td>
          <td title='Date'></td>
        </tr>
        <tr>
          <td title='Repository Name'>VacineRegRepo</td>
          <td title='C#'>SQL, C#(form)</td>
          <td title='URL'><a href='https://github.com/Fishpuke/VaccineRegRepo' title='Github URL'><i class='bx bx-link'></i></a></td>
          <td title='Date'>2021/08/27</td>
        </tr>
        <tr>
          <td title='Repository Name'>BMICalculator</td>
          <td title='C#'>SQL, C#(Form)</td>
          <td title='URL'><a href='https://github.com/Fishpuke/BMICalculator' title='Github URL'><i class='bx bx-link'></i></a></td>
          <td title='Date'>2021/09/04</td>
        </tr>
        <tr>
          <td title='Repository Name'>PRG522_Summative</td>
          <td title='C#'>C#(MVC)</td>
          <td title='URL'><a href='https://github.com/Fishpuke/PRG522_Summative' title='Github URL'><i class='bx bx-link'></i></a></td>
          <td title='Date'>2021/09/15</td>
        </tr>
        <tr>
          <td title='Repository Name'><strong>Personal Projects</strong></td>
          <td title='C#'></td>
          <td title='URL'></td>
          <td title='Date'></td>
        </tr>
        <tr>
          <td title='Repository Name'>Profile</td>
          <td title='C#'>React.js</td>
          <td title='URL'><a href='https://github.com/Fishpuke/Profile' title='Github URL'><i class='bx bx-link'></i></a></td>
          <td title='Date'>2022/05/23</td>
        </tr>
        <tr>
          <td title='Repository Name'>Password Generator</td>
          <td title='C#'>Python</td>
          <td title='URL'><a href='https://github.com/CodeNameJuJu/PasswordGenerator/' title='Github URL'><i class='bx bx-link'></i></a></td>
          <td title='Date'>2022/08/31</td>
        </tr>
      </tbody>
    </table>
    </div>
  </body>
  );
}

export default Projects;