import React from 'react'
import { Link } from 'react-router-dom'

function Navigate({ icon, path }) {
  return (

    <li class="nav-item">
      <Link class="nav-link" to={path} title='Home'>
        <i class={icon} ></i>
      </Link>
    </li>

  );
}

export default function Navbar() {

  return (
    <div class='sticky-top'>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/' title='Web Profile: Julian Stone'>
            <i class='bx bx-terminal bx-tada bx-md' ></i>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul class="navbar-nav">
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
          </div>
        </div>
      </nav>
    </div>

  )
}
