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

function Navigate({ icon, path }) {
  return (

    <li class="nav-item">
      <Link class="nav-link" to={path} title='Home'>
        <i class={icon} ></i>
      </Link>
    </li>

  );
}

export default function Footer() {
  return (
    <footer class="py-3 my-4 bg-dark">

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" title='Documents' data-bs-target="#myModal">
        Documents
      </button>
      <br />
      <br />

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
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <Navigate
          icon={'bx bx-home-alt bx-sm'}
          path={'/'}
        />
        <Navigate
          icon={'bx bx-folder-open bx-sm'}
          path={'/projects'}
        />
        <Navigate
          icon={'bx bx-envelope bx-sm'}
          path={'/contact'}
        />
      </ul>
      <p class="text-center text-muted">© 2023 Julian Stone, All rights reserved.</p>
    </footer>
  );
}
