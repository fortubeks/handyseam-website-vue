<script setup>
import DefaultMainLayout from "@/layouts/DefaultMainLayout.vue";
</script>

<template>
  <DefaultMainLayout>
    <!-- Start FAQ Hero Section -->
    <section class="faq-hero section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="faq-hero-content">
              <h1 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h1>
              <p class="wow fadeInUp" data-wow-delay=".4s">
                Find answers to common questions about HandySeam and how it can help your fashion
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End FAQ Hero Section -->

    <!-- Start FAQ Content Section -->
    <section class="faq-content section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-12">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-12">
                <div class="accordion" id="accordionFAQ1">
                  <div class="accordion-item wow fadeInUp" data-wow-delay=".2s">
                    <h2 class="accordion-header" id="heading1">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        <span class="title">What is HandySeam?</span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1"
                      data-bs-parent="#accordionFAQ1">
                      <div class="accordion-body">
                        <p>
                          HandySeam is a comprehensive mobile and web application designed
                          specifically for fashion designers and tailors. It helps you manage
                          customer information, orders, inventory, invoicing, staff
                          management, and
                          financial operations all in one place.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item wow fadeInUp" data-wow-delay=".3s">
                    <h2 class="accordion-header" id="heading2">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        <span class="title">Do I need to pay to get started?</span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                      data-bs-parent="#accordionFAQ1">
                      <div class="accordion-body">
                        <p>
                          No! We offer a free plan that includes basic features like customer
                          information management, order history tracking, styles and images
                          storage,
                          and customer invoicing. You can upgrade to our Premium plan
                          (₦3,500/month)
                          for advanced features like inventory management and staff
                          management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item wow fadeInUp" data-wow-delay=".4s">
                    <h2 class="accordion-header" id="heading3">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        <span class="title">How do I access HandySeam?</span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3"
                      data-bs-parent="#accordionFAQ1">
                      <div class="accordion-body">
                        <p>
                          HandySeam is available on multiple platforms: you can access it via
                          web
                          at app.handyseam.com, download the Android app from Google Play
                          Store, or
                          use the iOS version. All platforms are synchronized so you can work
                          seamlessly across devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-12">
                <div class="accordion" id="accordionFAQ2">
                  <div class="accordion-item wow fadeInUp" data-wow-delay=".2s">
                    <h2 class="accordion-header" id="heading4">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <span class="title">Can I track customer orders?</span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
                      data-bs-parent="#accordionFAQ2">
                      <div class="accordion-body">
                        <p>
                          Yes! HandySeam allows you to manage and track all customer orders in
                          real-time. You can update order status, attach style inspirations
                          and
                          images, and customers can track their orders through the app. This
                          helps
                          you stay organized and keep customers informed about their orders.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item wow fadeInUp" data-wow-delay=".3s">
                    <h2 class="accordion-header" id="heading5">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        <span class="title">Is my data secure on HandySeam?</span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5"
                      data-bs-parent="#accordionFAQ2">
                      <div class="accordion-body">
                        <p>
                          Security is our top priority. All data is encrypted and stored
                          securely on
                          our servers. We comply with international data protection standards.
                          Your
                          customer information and financial data are protected with
                          industry-leading
                          security measures.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item wow fadeInUp" data-wow-delay=".4s">
                    <h2 class="accordion-header" id="heading6">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        <span class="title">Can I cancel my subscription anytime?</span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6"
                      data-bs-parent="#accordionFAQ2">
                      <div class="accordion-body">
                        <p>
                          Yes, you can cancel your subscription at any time without any hidden
                          fees
                          or penalties. If you upgrade to a premium plan and decide it is not
                          right
                          for you, you can easily downgrade back to the free plan or cancel
                          completely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional FAQ Item -->
            <div class="row mt-5">
              <div class="col-12">
                <div class="accordion" id="accordionFAQ3">
                  <div class="accordion-item wow fadeInUp" data-wow-delay=".5s">
                    <h2 class="accordion-header" id="heading7">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        <span class="title">
                          How do I integrate WhatsApp communication with HandySeam?
                        </span>
                        <i class="lni lni-plus"></i>
                      </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7"
                      data-bs-parent="#accordionFAQ3">
                      <div class="accordion-body">
                        <p>
                          HandySeam integrates seamlessly with WhatsApp (available in Premium
                          plan).
                          You can send order updates, reminders, and personalized messages
                          directly
                          to your customers via WhatsApp. This feature helps you maintain
                          better
                          communication and improves customer satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End FAQ Content Section -->

    <!-- Start CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cta-content wow fadeInUp" data-wow-delay=".2s">
              <h2>Still have questions?</h2>
              <p>Contact our support team and we will be happy to help you get started</p>
              <div class="button">
                <a href="https://wa.me/2348090839412" class="btn">Contact Support <i
                    class="lni lni-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End CTA Section -->
  </DefaultMainLayout>
</template>

<style scoped>
.faq-hero {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.faq-hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
}

.faq-hero-content p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.faq-content {
  padding: 80px 0;
}

.accordion-item {
  margin-bottom: 1.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
}

.accordion-button {
  padding: 1.5rem;
  font-weight: 600;
  background-color: #f8f9fa;
  border: none;
  color: #333;
}

.accordion-button:not(.collapsed) {
  background-color: #667eea;
  color: white;
}

.accordion-button:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
}

.accordion-body {
  padding: 1.5rem;
  color: #666;
  line-height: 1.8;
}

.cta-section {
  padding: 80px 0;
  background-color: #f8f9fa;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
}

@media (max-width: 768px) {
  .faq-hero-content h1 {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 1.8rem;
  }
}
</style>
