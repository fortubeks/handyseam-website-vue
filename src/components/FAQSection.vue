<script setup>
</script>

<template>
    <!-- Start FAQ Area -->
    <section id="faq" class="faq section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h3 class="wow zoomIn" data-wow-delay=".2s">FAQ</h3>
                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Frequently Asked Questions</h2>
                        <p class="wow fadeInUp" data-wow-delay=".6s">
                            Get answers to common questions about HandySeam and how it can help your tailoring
                            business
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="accordion" id="accordionFAQ1">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading1">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                    <span class="title">What is HandySeam?</span><i class="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1"
                                data-bs-parent="#accordionFAQ1">
                                <div class="accordion-body">
                                    <p>
                                        HandySeam is a comprehensive app designed for fashion designers and tailors to
                                        manage their business operations. It helps you organize customer information,
                                        track orders, manage inventory, create invoices, and handle financial records
                                        all in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    <span class="title">Do I need to pay to get started?</span><i
                                        class="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                                data-bs-parent="#accordionFAQ1">
                                <div class="accordion-body">
                                    <p>
                                        No! We offer a free plan with essential features like customer information
                                        management, order history, and invoicing. You can upgrade to our Premium plan
                                        (₦3,500/month) for advanced features anytime without any commitment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    <span class="title">How do I access HandySeam?</span><i class="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3"
                                data-bs-parent="#accordionFAQ1">
                                <div class="accordion-body">
                                    <p>
                                        HandySeam is available on web (app.handyseam.com), Android (Google Play Store),
                                        and iOS. You can access it from any device, and your data syncs automatically
                                        across all platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12 xs-margin">
                    <div class="accordion" id="accordionFAQ2">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    <span class="title">Is my data secure?</span><i class="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4"
                                data-bs-parent="#accordionFAQ2">
                                <div class="accordion-body">
                                    <p>
                                        Yes, security is our priority. All your data is encrypted and stored securely
                                        on our servers. We comply with international data protection standards to keep
                                        your customer and financial information safe.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading5">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    <span class="title">Can I cancel my subscription anytime?</span><i
                                        class="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5"
                                data-bs-parent="#accordionFAQ2">
                                <div class="accordion-body">
                                    <p>
                                        Absolutely! You can cancel or downgrade your subscription anytime without any
                                        hidden fees or penalties. We want you to use HandySeam on your terms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading6">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                    <span class="title">How does WhatsApp integration help my business?</span><i
                                        class="lni lni-plus"></i>
                                </button>
                            </h2>
                            <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6"
                                data-bs-parent="#accordionFAQ2">
                                <div class="accordion-body">
                                    <p>
                                        With WhatsApp integration (available in Premium plan), you can send order
                                        updates, reminders, and personalized messages directly to customers. This
                                        improves communication and customer satisfaction without extra effort.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <div class="button">
                        <router-link to="/faq" class="btn">View More FAQs <i
                                class="lni lni-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End FAQ Area -->
</template>

<style scoped>
.faq {
    background-color: #f9f9f9;
}

.accordion-item {
    margin-bottom: 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
}

.accordion-button {
    padding: 1.25rem;
    font-weight: 600;
    background-color: #fff;
    border: none;
    color: #333;
    transition: all 0.3s ease;
}

.accordion-button:not(.collapsed) {
    background-color: #667eea;
    color: white;
    box-shadow: none;
}

.accordion-button:focus {
    border-color: transparent;
    box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
}

.accordion-body {
    padding: 1.25rem;
    color: #666;
    line-height: 1.7;
}

.text-center {
    text-align: center;
}

.mt-4 {
    margin-top: 2rem;
}
</style>
