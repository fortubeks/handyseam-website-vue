<script setup>
import logo from "../assets/images/logo/logo-white.png";
</script>
<template>
  <footer class="footer section">
    <!-- Start Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="inner-content">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-about">
                <div class="logo">
                  <a href="{{route('home')}}">
                    <img v-bind:src="logo" alt="#" />
                  </a>
                </div>
                <p>
                  HandySeam is the ultimate app for fashion designers and tailors to simplify and
                  supercharge their business operations.
                </p>
                <h4 class="social-title">Follow Us On:</h4>
                <ul class="social">
                  <li>
                    <a href="https://www.facebook.com/tailorapp.ng/"
                      ><i class="lni lni-facebook-filled"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/handyseam/"
                      ><i class="lni lni-instagram"></i
                    ></a>
                  </li>
                  <!-- <li><a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a></li>
                                <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li> -->
                  <li>
                    <a href="https://www.youtube.com/@fortranhouse"
                      ><i class="lni lni-youtube"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-link">
                <h3>Resources</h3>
                <ul>
                  <li><a href="javascript:void(0)">Blog</a></li>
                  <li><a href="javascript:void(0)">FAQs</a></li>
                  <li><a href="javascript:void(0)">Support</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-link">
                <h3>Company</h3>
                <ul>
                  <li><a href="javascript:void(0)">About Us</a></li>
                  <li><a href="javascript:void(0)">Carrers</a></li>
                  <li><a href="javascript:void(0)">Press</a></li>
                  <li><a href="javascript:void(0)">Contact</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-2 col-md-6 col-12">
              <!-- Single Widget
                        <div class="single-footer newsletter">
                            <h3>Subscribe</h3>
                            <p>Subscribe to our newsletter for the latest updates</p>
                            <form action="#" method="get" target="_blank" class="newsletter-form">
                                <input name="EMAIL" placeholder="Email address" required="required" type="email">
                                <div class="button">
                                    <button class="sub-btn"><i class="lni lni-envelope"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                         End Single Widget -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Footer Top -->
    <!-- Start Copyright Area -->
    <div class="copyright-area">
      <div class="container">
        <div class="inner-content">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <p class="copyright-text">© HandySeam - All Rights Reserved</p>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <p class="copyright-owner">
                Designed and Developed by
                <a href="https://fortranhouse.com/" target="_blank">Fortran House</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Copyright Area -->
  </footer>
</template>
