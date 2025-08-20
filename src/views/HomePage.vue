<script setup>
import DefaultMainLayout from "@/layouts/DefaultMainLayout.vue";
</script>
<template>
  <DefaultMainLayout>
    <!-- Start Hero Area -->
    <section class="hero-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-12 col-12">
            <div class="hero-content">
              <h4>Grow your fashion business</h4>
              <h1>
                Best app for your<br />
                fashion business
              </h1>
              <p>
                HandySeam is the ultimate app for fashion designers <br />and tailors to simplify
                and supercharge their business operations.
              </p>
              <div class="button-container">
                <div class="button">
                  <a href="https://app.handyseam.com/register" class="btn"
                    ><i class="lni lni-laptop"></i>Web</a
                  >
                </div>
                <div class="button">
                  <a
                    href="https://play.google.com/store/apps/details?id=ng.com.handyseam&hl=en"
                    class="btn"
                    ><i class="lni lni-android"></i>Android</a
                  >
                </div>
                <div class="button">
                  <a href="https://app.handyseam.com/register" class="btn"
                    ><i class="lni lni-apple"></i>Apple</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
              <img class="main-image" src="@/assets/images/home/hero-image.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero Area -->

    <!-- Start Clients Area -->
    <!-- Start Testimonials Area -->
    <!-- <section class="testimonials style2 section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <p class="wow fadeInUp" data-wow-delay=".2s" style="color: #e61a5a">
                These fashion brands trust us with their business
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <section class="customer-logos slider">
            <div class="slide"><img src="@/assets/images/home/customer1.jpg" /></div>
            <div class="slide"><img src="@/assets/images/home/customer2.jpg" /></div>
            <div class="slide"><img src="@/assets/images/home/customer3.jpg" /></div>
            <div class="slide"><img src="@/assets/images/home/customer4.jpg" /></div>
            <div class="slide"><img src="@/assets/images/home/customer5.jpg" /></div>
            <div class="slide"><img src="@/assets/images/home/customer6.jpg" /></div>
          </section>
        </div>
      </div>
    </section> -->
    <!-- End Testimonial Area -->
    <!-- End Clients Area -->

    <!-- Start Features Area -->
    <section class="features section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12">
            <div class="image wow fadeInLeft" data-wow-delay=".3s">
              <img src="@/assets/images/home/feature-img.png" alt="#" />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="content">
              <h3 class="heading wow fadeInUp" data-wow-delay=".5s">
                <span> Features</span>Designed & built by <br />
                industry leaders
              </h3>
              <!-- Start Single Feature -->
              <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div class="f-icon">
                  <i class="lni lni-dashboard"></i>
                </div>
                <h4>Invoicing</h4>
                <p>
                  Effortlessly create and manage invoices for customer orders, ensuring seamless
                  payment tracking and financial organization
                </p>
              </div>
              <!-- End Single Feature -->
              <!-- Start Single Feature -->
              <div class="single-feature wow fadeInUp" data-wow-delay=".7s">
                <div class="f-icon">
                  <i class="lni lni-pencil-alt"></i>
                </div>
                <h4>Style Inspiration</h4>
                <p>
                  Save style inspirations directly to customer orders, streamlining design
                  preferences and enhancing personalized tailoring services
                </p>
              </div>
              <!-- End Single Feature -->
              <!-- Start Single Feature -->
              <div class="single-feature wow fadeInUp" data-wow-delay="0.8s">
                <div class="f-icon">
                  <i class="lni lni-vector"></i>
                </div>
                <h4>Whatsapp Communication</h4>
                <p>
                  Seamlessly connect with customers via WhatsApp for orders, updates, reminders, and
                  personalized tailoring experiences
                </p>
              </div>
              <!-- End Single Feature -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Features Area -->

    <!-- Start Services Area -->
    <div id="features" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h3 class="wow zoomIn" data-wow-delay=".2s">What we offer</h3>
              <h2 class="wow fadeInUp" data-wow-delay=".4s">Our Features</h2>
              <p class="wow fadeInUp" data-wow-delay=".6s"></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
            <div class="single-service">
              <div class="main-icon">
                <i class="lni lni-grid-alt"></i>
              </div>
              <h4 class="text-title">Customer Information & Order History</h4>
              <p>
                Access comprehensive customer details and order history instantly, ensuring
                personalized service and efficient management.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
            <div class="single-service">
              <div class="main-icon">
                <i class="lni lni-keyword-research"></i>
              </div>
              <h4 class="text-title">Items & Inventory Management</h4>
              <p>
                Effortlessly manage items and inventory to track stock levels, ensure availability,
                and streamline order fulfillment
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
            <div class="single-service">
              <div class="main-icon">
                <i class="lni lni-vector"></i>
              </div>
              <h4 class="text-title">Customer Track Order</h4>
              <p>
                Enable customers to track their orders in real-time, ensuring transparency and
                enhancing their overall experience
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
            <div class="single-service">
              <div class="main-icon">
                <i class="lni lni-book"></i>
              </div>
              <h4 class="text-title">Staff & Tailors Management</h4>
              <p>
                Efficiently manage staff and tailors, streamline task assignments, and monitor
                performance for seamless operations
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
            <div class="single-service">
              <div class="main-icon">
                <i class="lni lni-cloud-network"></i>
              </div>
              <h4 class="text-title">Shop Expenses Management</h4>
              <p>
                Track and manage shop expenses, including materials and overhead costs, to ensure
                better financial control
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
            <div class="single-service">
              <div class="main-icon">
                <i class="lni lni-display-alt"></i>
              </div>
              <h4 class="text-title">Financial Management</h4>
              <p>
                Efficiently manage revenue, expenses, and profits to ensure the business remains
                financially healthy and sustainable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Services Area -->

    <!-- Start Pricing Table Area -->
    <section id="pricing" class="pricing-table section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h3 class="wow zoomIn" data-wow-delay=".2s">pricing</h3>
              <h2 class="wow fadeInUp" data-wow-delay=".4s">Pricing & Plans</h2>
              <p class="wow fadeInUp" data-wow-delay=".6s">
                Choose the package that suits your business.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
            <!-- Single Table -->
            <div class="single-table">
              <!-- Table Head -->
              <div class="table-head">
                <h4 class="title">Free</h4>
                <p class="sub-title">Basic package</p>
                <div class="price">
                  <h2 class="amount">
                    <span class="currency">₦</span>0<span class="duration">/month</span>
                  </h2>
                </div>
              </div>
              <!-- End Table Head -->
              <!-- Start Table Content -->
              <div class="table-content">
                <!-- Table List -->
                <ul class="table-list">
                  <li>Customer Information & Order History</li>
                  <li>Styles & Images</li>
                  <li>Customer Invoicing</li>
                  <li class="disable">Items & Inventory Management</li>
                  <li class="disable">Staff & Tailor Management</li>
                  <li class="disable">Financial Management</li>
                  <li class="disable">Whatsapp & SMS Communication</li>
                  <li class="disable">Premium Support</li>
                </ul>
                <!-- End Table List -->
              </div>
              <!-- End Table Content -->
              <div class="button">
                <a href="https://app.handyseam.com/register" class="btn"
                  >Start free trial <i class="lni lni-arrow-right"></i
                ></a>
              </div>
              <p class="no-card">No credit card required</p>
            </div>
            <!-- End Single Table-->
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
            <!-- Single Table -->
            <div class="single-table middle">
              <span class="popular">Most Popular</span>
              <!-- Table Head -->
              <div class="table-head">
                <h4 class="title">Premium</h4>
                <p class="sub-title">Complete package</p>
                <div class="price">
                  <h2 class="amount">
                    <span class="currency">₦</span>2,500<span class="duration">/month</span>
                  </h2>
                </div>
              </div>
              <!-- End Table Head -->
              <!-- Start Table Content -->
              <div class="table-content">
                <!-- Table List -->
                <ul class="table-list">
                  <li>Customer Information & Order History</li>
                  <li>Styles & Images</li>
                  <li>Customer Invoicing</li>
                  <li>Items & Inventory Management</li>
                  <li>Staff & Tailor Management</li>
                  <li>Financial Management</li>
                  <li>Whatsapp & SMS Communication</li>
                  <li>Premium Support</li>
                </ul>
                <!-- End Table List -->
              </div>
              <!-- End Table Content -->
              <div class="button">
                <a href="https://app.handyseam.com/register" class="btn btn-alt"
                  >Start free trial <i class="lni lni-arrow-right"></i
                ></a>
              </div>
              <p class="no-card">No credit card required</p>
            </div>
            <!-- End Single Table-->
          </div>
          <div class="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".8s">
            <!-- Single Table -->
            <div class="single-table">
              <!-- Table Head -->
              <div class="table-head">
                <h4 class="title">Enterprise</h4>
                <p class="sub-title">For more customisations</p>
                <div class="price"></div>
              </div>
              <!-- End Table Head -->
              <!-- Start Table Content -->
              <div class="table-content">
                <!-- Table List -->
                <ul class="table-list"></ul>
                <!-- End Table List -->
              </div>
              <!-- End Table Content -->
              <div class="button">
                <a href="https://wa.me/2348090839412" class="btn"
                  >Talk to us <i class="lni lni-arrow-right"></i
                ></a>
              </div>
              <p class="no-card"></p>
            </div>
            <!-- End Single Table-->
          </div>
        </div>
      </div>
    </section>
    <!--/ End Pricing Table Area -->

    <!-- Start Intro Video Area -->
    <section class="intro-video-area section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="inner-content-head">
              <div class="inner-content">
                <img class="shape1" src="@/assets/images/video/shape1.svg" alt="#" />
                <img class="shape2" src="@/assets/images/video/shape2.svg" alt="#" />
                <div class="section-title">
                  <span class="wow zoomIn" data-wow-delay=".2s">One app to rule them all</span>
                  <h2 class="wow fadeInUp" data-wow-delay=".4s">Watch Our intro video</h2>
                  <p class="wow fadeInUp" data-wow-delay=".6s">
                    HandySeam is the ultimate app for fashion designers and tailors to simplify and
                    supercharge their business operations.
                  </p>
                </div>
                <div class="intro-video-play">
                  <div class="play-thumb wow zoomIn" data-wow-delay=".2s">
                    <a
                      href="https://youtu.be/OlwkXZ5_qYI?si=5BeoXEEhEZJIVXse"
                      class="glightbox video"
                      ><i class="lni lni-play"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Intro Video Area -->

    <!-- Start Faq Area
<section class="faq section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title">
                    <h3 class="wow zoomIn" data-wow-delay=".2s">Faq</h3>
                    <h2 class="wow fadeInUp" data-wow-delay=".4s">frequently asked questions</h2>
                    <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                        Ipsum available, but the majority have
                        suffered alteration in some form.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-12">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                <span class="title">Can I cancel my subscription at anytime?</span><i
                                    class="lni lni-plus"></i>
                            </button>
                        </h2>
                        <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                    amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu
                                    erat mattis lorem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                    amet ante nec vulputate.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                <span class="title">Can I change my plan later on?</span><i
                                    class="lni lni-plus"></i>
                            </button>
                        </h2>
                        <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor
                                    brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                                </p>
                                <p>
                                    sunt alqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim ke ffiyeh helvetica, Spark beer labore wes anderson
                                    cred nesciunt sapiente ea proident.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                <span class="title">Will you renew my subscription automatically?</span><i
                                    class="lni lni-plus"></i>
                            </button>
                        </h2>
                        <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas expedita,
                                    repellendus est nemo cum quibusdam optio, voluptate hic a tempora facere, nihil
                                    non itaque alias similique quas quam odit consequatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 xs-margin">
                <div class="accordion" id="accordionExample2">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading11">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                <span class="title">How many sites can I install the widgets of this app
                                    to?</span><i class="lni lni-plus"></i>
                            </button>
                        </h2>
                        <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                    amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu
                                    erat mattis lorem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                                    amet ante nec vulputate.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading22">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                <span class="title">Do you offer any discounts?</span><i class="lni lni-plus"></i>
                            </button>
                        </h2>
                        <div id="collapse22" class="accordion-collapse collapse" aria-labelledby="heading22"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor
                                    brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                                </p>
                                <p>
                                    sunt alqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim ke ffiyeh helvetica, Spark beer labore wes anderson
                                    cred nesciunt sapiente ea proident.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading33">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
                                <span class="title">Do I get updates for the app?</span><i class="lni lni-plus"></i>
                            </button>
                        </h2>
                        <div id="collapse33" class="accordion-collapse collapse" aria-labelledby="heading33"
                            data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas expedita,
                                    repellendus est nemo cum quibusdam optio, voluptate hic a tempora facere, nihil
                                    non itaque alias similique quas quam odit consequatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
/ End Faq Area -->

    <!-- Start Call Action Area -->
    <section id="call-action" class="call-action">
      <div class="container">
        <div class="inner-content">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-7 col-12">
              <div class="text">
                <h2>
                  Download Our App & <br />
                  Start your free trial today.
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-5 col-12">
              <div class="button">
                <a href="https://app.handyseam.com/register" class="btn"
                  ><i class="lni lni-apple"></i> App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ng.com.handyseam"
                  class="btn btn-alt"
                  ><i class="lni lni-play-store"></i> Google Play</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultMainLayout>
</template>

<script>
import GLightbox from "glightbox";

//========= glightbox
GLightbox({
  href: "https://youtu.be/OlwkXZ5_qYI?si=5BeoXEEhEZJIVXse",
  type: "video",
  source: "youtube", //vimeo, youtube or local
  width: 900,
  autoplayVideos: true,
});
</script>
