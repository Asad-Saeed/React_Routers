import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
         <section class="top-bar animated-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/">
                        <img src="../images/logo.png" alt="logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Service">Service</Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Header
