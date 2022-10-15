import React from "react";
import "./header.css"

function Header() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navigation" id="navbar">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src="images/logo.png" alt="" class="img-fluid" />
            </a>

            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarmain"
              aria-controls="navbarmain"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icofont-navigation-menu"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarmain">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/appointment">
                    Appointment
                  </a>
                </li>

                {/* <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Blog <i class="icofont-thin-down"></i></a>
						<ul class="dropdown-menu" aria-labelledby="dropdown05">
							<li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
							<li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
						</ul>
					</li> */}
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
