<script setup>
import logo from "../assets/images/logo/logo.png";
</script>
<template>
  <header class="header navbar-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="nav-inner">
            <!-- Start Navbar -->
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="/">
                <img v-bind:src="logo" alt="Logo" />
              </a>
              <button
                class="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a href="/" class="active" aria-label="Toggle navigation">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#features" aria-label="Toggle navigation">About</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#pricing" aria-label="Toggle navigation">Pricing</a>
                  </li>

                  <li class="nav-item">
                    <a href="/#call-action" aria-label="Toggle navigation">Contact</a>
                  </li>
                </ul>
              </div>
              <!-- navbar collapse -->
              <div class="button home-btn">
                <a href="https://app.handyseam.com/register" class="btn">Try for free</a>
              </div>
            </nav>
            <!-- End Navbar -->
          </div>
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </header>
</template>
