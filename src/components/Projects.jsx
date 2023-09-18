import React from 'react';
import './Main.css';

function Projects() {

  window.scrollTo(0, 0);

  return (
    <body class='body-text center-again container-fluid'>
      <div class="center-again mt-3">
        <h2>Projects</h2>
        <p>Find a list of projects and links to respective projects below:</p>

        <table class="table table-dark table-striped table-active table-hover table-responsive shadow p-3 mb-5 rounded">
          <thead class='table-dark'>
            <tr>
              <th title='Repository name'><i class='bx bx-git-repo-forked' ></i> Repository name</th>
              <th title='Language used'><i class='bx bx-code-block'></i> Language/Framework</th>
              <th title='URL'><i class='bx bx-link'></i> URL</th>
              <th title='Date uploaded'><i class='bx bxs-calendar'></i> Date uploaded</th>
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
              <td title='URL'><a href='https://github.com/Fishpuke/VaccineRegRepo' target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
              <td title='Date'>2021/08/27</td>
            </tr>
            <tr>
              <td title='Repository Name'>BMICalculator</td>
              <td title='C#'>SQL, C#(Form)</td>
              <td title='URL'><a href='https://github.com/Fishpuke/BMICalculator' target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
              <td title='Date'>2021/09/04</td>
            </tr>
            <tr>
              <td title='Repository Name'>PRG522_Summative</td>
              <td title='C#'>C#(MVC)</td>
              <td title='URL'><a href='https://github.com/Fishpuke/PRG522_Summative' target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
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
              <td title='URL'><a href='https://github.com/Fishpuke/Profile' target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
              <td title='Date'>2022/05/23</td>
            </tr>
            <tr>
              <td title='Repository Name'>Logichem</td>
              <td title='C#'>React.js</td>
              <td title='URL'><a href='https://github.com/CodeNameJuJu/Logichem' target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
              <td title='Date'>2022/08/22</td>
            </tr>
            <tr>
              <td title='Repository Name'>Password Generator</td>
              <td title='C#'>Python</td>
              <td title='URL'><a href='https://github.com/CodeNameJuJu/PasswordGenerator/' target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
              <td title='Date'>2022/08/31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default Projects;