import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

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
    </div>
  </div>
</nav>
</div>

  )
}

export default Navbar