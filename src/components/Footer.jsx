import React from 'react';
import { Link } from 'react-router-dom'
import './Main.css';

class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download title='Download'>{this.props.children}</a>
        )
    }
  }
  
  class CVComponent extends React.Component {
    render() {
        return (
            <DownloadLink src='CV.pdf' target="_blank">Download CV</DownloadLink>
        )
    }
  }

  class CertComponent extends React.Component {
    render() {
        return (
            <DownloadLink src='CTU.pdf' target="_blank">Download Certificate</DownloadLink>
        )
    }
  }

function Footer() {
  return (
    <footer class="py-3 my-4 bg-dark">

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" title='Documents' data-bs-target="#myModal">
      Documents
    </button>
    <br/>
    <br/>

    <div class="modal fade text-center" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Download</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" title='Close window'></button>
          </div>

          <div class="modal-body">
            <p><strong>Curriculum Vitae:</strong> <CVComponent /></p>
            <p><strong>Qualification:</strong> <CertComponent /></p>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" title='Close window'>Close</button>
          </div>
        </div>
      </div>
    </div>
    <ul class="nav justify-content-center border-top border-bottom pb-3 mb-3">
      <li class="nav-item">
        <Link class="nav-link" to='/' title='Home'>
            <i class='bx bx-home-alt bx-sm' ></i>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/projects' title='Projects' >
            <i class='bx bx-folder-open bx-sm' ></i>
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/contact' title='Contact' >
            <i class='bx bx-envelope bx-sm' ></i>
        </Link>
      </li>
    </ul>
    <p class="text-center text-muted">© 2022 Stone Software, All rights reserved.</p>
  </footer>
  );
}

export default Footer;