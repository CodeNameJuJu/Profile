import React from 'react';
import './Main.css';

function MyProjects({repo, lang, link, date}) {
  return (

    <tr>
      <td title='Repository Name'>{repo}</td>
      <td title='Language used'>{lang}</td>
      <td title='URL'><a href={link} target="_blank" rel="noopener noreferrer" title='Github URL'><i class='bx bx-link'></i></a></td>
      <td title='Date'>{date}</td>
    </tr>

  );
}

export default function Projects() {

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
              <td title='Language used'></td>
              <td title='URL'></td>
              <td title='Date'></td>
            </tr>
            <MyProjects 
              repo={'VacineRegRepo'}
              lang={'SQL, C#(form)'}
              link={'https://github.com/CodeNameJuJu/VaccineRegRepo'}
              date={'2021/08/27'}
            />
            <MyProjects 
              repo={'BMICalculator'}
              lang={'SQL, C#(Form)'}
              link={'https://github.com/CodeNameJuJu/BMICalculator'}
              date={'2021/09/04'}
            />
            <MyProjects 
              repo={'PRG522_Summative'}
              lang={'C#(MVC)'}
              link={'https://github.com/CodeNameJuJu/PRG522_Summative'}
              date={'2021/09/15'}
            />
            <tr>
              <td title='Repository Name'><strong>Personal Projects</strong></td>
              <td title='Language used'></td>
              <td title='URL'></td>
              <td title='Date'></td>
            </tr>
            <MyProjects
              repo={'Profile'}
              lang={'React.js'}
              link={'https://github.com/CodeNameJuJu/Profile'}
              date={'2022/05/23'}
            />
            <MyProjects
              repo={'Logichem'}
              lang={'React.js'}
              link={'https://github.com/CodeNameJuJu/Logichem'}
              date={'2022/08/22'}
            />
            <MyProjects
              repo={'Password Generator'}
              lang={'Python'}
              link={'https://github.com/CodeNameJuJu/PasswordGenerator'}
              date={'2022/08/31'}
            />
          </tbody>
        </table>
      </div>
    </body>
  );
}
