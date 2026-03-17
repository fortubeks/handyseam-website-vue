<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import DefaultMainLayout from "@/layouts/DefaultMainLayout.vue";

const pageTitle = "About Us";
const pageDescription =
  "We're HandySeam, the best tailoring app helping designers manage orders, measurements, and clients. Start with tailor software free download...";

let previousTitle = "";
let previousDescription = null;

const pillars = [
  {
    title: "Simplicity For Designers",
    description:
      "HandySeam is built to make business management simple for fashion designers and tailoring businesses. This intuitive tailoring software helps users manage orders, measurements, and customers without technical stress.",
    icon: "lni lni-lightbulb",
  },
  {
    title: "Business Growth",
    description:
      "HandySeam empowers fashion designers with structured tools that improve workflow and revenue tracking. It helps fashion businesses operate efficiently, scale operations, and increase profitability.",
    icon: "lni lni-graph",
  },
  {
    title: "Reliability",
    description:
      "With secure data management and organized records, HandySeam ensures tailoring businesses can depend on accurate information every day. Lost records and operational confusion are reduced significantly.",
    icon: "lni lni-shield",
  },
  {
    title: "Innovation For Fashion Businesses",
    description:
      "HandySeam continuously evolves as a modern tailoring app, delivering smarter tools that connect fashion creativity with professional business operations.",
    icon: "lni lni-bulb",
  },
];

const audiences = [
  {
    title: "Fashion Designers",
    description:
      "HandySeam helps designers replace manual processes with organized digital systems so they can focus on creativity while maintaining full control of clients, measurements, and production timelines.",
  },
  {
    title: "Tailoring Shop Owners",
    description:
      "As a complete tailoring shop management software, HandySeam helps owners monitor orders, payments, and staff activities while improving operational visibility and profitability.",
  },
  {
    title: "Operations / Shop Managers",
    description:
      "Managers gain centralized control over workflow coordination, task assignment, and delivery timelines to improve productivity and accountability.",
  },
  {
    title: "Creative Directors",
    description:
      "Creative directors use HandySeam to align design execution with structured planning, connecting team creativity to measurable operational performance.",
  },
  {
    title: "Lead Fashion Designers",
    description:
      "Lead fashion designers and tailors rely on HandySeam to manage multiple projects, collaborate smoothly, and maintain consistent quality while supporting business growth.",
  },
];

const coreFeatures = [
  "Track orders, measurements, and customer details from one centralized system.",
  "Schedule appointments and monitor delivery timelines so no task is overlooked.",
  "Digitize records, monitor payments, and review business performance accurately.",
  "Combine production workflow and business management in a platform built for tailors.",
];

const setMetaDescription = (content) => {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

onMounted(() => {
  previousTitle = document.title;
  const currentDescriptionTag = document.querySelector('meta[name="description"]');
  previousDescription = currentDescriptionTag ? currentDescriptionTag.getAttribute("content") : null;

  document.title = pageTitle;
  setMetaDescription(pageDescription);
  window.scrollTo({ top: 0, behavior: "auto" });
});

onBeforeUnmount(() => {
  if (previousTitle) {
    document.title = previousTitle;
  }
  if (previousDescription !== null) {
    setMetaDescription(previousDescription);
  }
});
</script>

<template>
  <DefaultMainLayout>
    <main class="about-us-page">
      <section class="about-hero">
        <div class="container">
          <div class="row align-items-center gy-4">
            <div class="col-lg-7">
              <p class="eyebrow">About HandySeam</p>
              <h1>HandySeam - The Smart App/Software For Fashion Designers</h1>
              <p class="lead-text">
                HandySeam is a modern solution built to help fashion designers and tailoring
                businesses manage operations with clarity and efficiency. As one of the most
                practical tailoring apps available today, HandySeam combines creative workflow with
                powerful business management tools.
              </p>
              <p class="lead-text">
                This all-in-one tailoring software enables designers to organize orders, track
                measurements, manage customers, and oversee daily activities from a single
                platform, whether they run a growing studio or an established fashion brand.
              </p>
              <div class="hero-chips">
                <span>Tailoring app free download</span>
                <span>Tailoring shop management software</span>
                <span>Made for fashion businesses</span>
              </div>
            </div>
            <div class="col-lg-5">
              <aside class="hero-card">
                <h2>What You Get With HandySeam</h2>
                <ul>
                  <li><i class="lni lni-checkmark-circle"></i>Order and workflow visibility</li>
                  <li><i class="lni lni-checkmark-circle"></i>Accurate measurement records</li>
                  <li><i class="lni lni-checkmark-circle"></i>Customer and payment tracking</li>
                  <li><i class="lni lni-checkmark-circle"></i>Scalable fashion business tools</li>
                </ul>
                <a class="btn" href="https://app.handyseam.com/register">Start For Free</a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="section-head">
            <h2>Our Story</h2>
          </div>
          <div class="story-panel">
            <p>
              HandySeam came to life after recognizing the daily challenges fashion designers and
              tailoring businesses face while managing orders, measurements, and delivery timelines
              with manual methods.
            </p>
            <p>
              Many existing tailoring apps and generic business tools failed to address the unique
              workflow of tailors. HandySeam was developed as a specialized tailoring software
              designed specifically for the fashion industry, helping designers replace scattered
              records with a structured digital system.
            </p>
            <p>
              Our goal has stayed simple: provide a reliable tailoring app that helps professionals
              run efficient, profitable, and well-organized fashion businesses.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section alt-bg">
        <div class="container">
          <div class="section-head">
            <h2>What HandySeam Stands For</h2>
          </div>
          <div class="row g-4">
            <div v-for="pillar in pillars" :key="pillar.title" class="col-lg-6">
              <article class="value-card">
                <div class="icon-wrap">
                  <i :class="pillar.icon"></i>
                </div>
                <h3>{{ pillar.title }}</h3>
                <p>{{ pillar.description }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="section-head">
            <h2>HandySeam Core Features</h2>
          </div>
          <p class="section-copy">
            HandySeam provides powerful tools designed to help fashion designers manage every part
            of daily operations from one platform. Unlike many basic tailoring apps, HandySeam
            unifies business management and production workflow in one system built specifically for
            tailoring professionals.
          </p>
          <div class="feature-grid">
            <div v-for="feature in coreFeatures" :key="feature" class="feature-item">
              <i class="lni lni-star-filled"></i>
              <p>{{ feature }}</p>
            </div>
          </div>
          <p class="section-copy">
            Fashion designers looking for a reliable tailoring software free download experience can
            use HandySeam to digitize records and monitor performance with confidence.
          </p>
        </div>
      </section>

      <section class="content-section alt-bg">
        <div class="container">
          <div class="section-head">
            <h2>Who Is HandySeam Built For?</h2>
          </div>
          <div class="row g-4">
            <div v-for="audience in audiences" :key="audience.title" class="col-lg-6">
              <article class="audience-card">
                <h3>{{ audience.title }}</h3>
                <p>{{ audience.description }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="section-head">
            <h2>Why HandySeam Is The Best Tailoring App</h2>
          </div>
          <div class="story-panel">
            <p>
              HandySeam is widely recognized as one of the best tailoring apps because it is built
              specifically for the real operational needs of fashion designers and tailoring
              businesses.
            </p>
            <p>
              What sets HandySeam apart is the balance between simplicity and powerful
              functionality. Designers can adopt the platform quickly without technical training,
              move from manual record keeping to organized software workflows, and reduce costly
              business errors.
            </p>
            <p>
              HandySeam continues to evolve from feedback provided by fashion designers worldwide.
              By combining usability, industry-focused features, and scalable tools, the platform
              helps designers run efficient and sustainable fashion businesses.
            </p>
          </div>

          <div class="cta-panel" id="call-action">
            <h3>Ready to run your fashion business smarter?</h3>
            <p>
              Start with HandySeam today and transform your tailoring operations into a structured,
              scalable system.
            </p>
            <a class="btn" href="https://app.handyseam.com/register">Get Started Free</a>
          </div>
        </div>
      </section>
    </main>
  </DefaultMainLayout>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap");

.about-us-page {
  --about-primary: #e61a5a;
  --about-deep: #0f1d3a;
  --about-warm: #ff8f3c;
  --about-ink: #253047;
  --about-muted: #5f6d87;
  --about-surface: #ffffff;
  --about-soft: #fff6f9;
  font-family: "Outfit", "DM Sans", sans-serif;
  background: linear-gradient(180deg, #fffafc 0%, #ffffff 42%, #fff8f3 100%);
}

.about-hero {
  padding: 150px 0 90px;
  position: relative;
  overflow: hidden;
}

.about-hero::before,
.about-hero::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
}

.about-hero::before {
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, rgba(230, 26, 90, 0.22), rgba(230, 26, 90, 0));
  top: -120px;
  right: -80px;
}

.about-hero::after {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 143, 60, 0.2), rgba(255, 143, 60, 0));
  left: -90px;
  bottom: -120px;
}

.eyebrow {
  color: var(--about-primary);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}

h1 {
  font-family: "Fraunces", "Spartan", serif;
  color: var(--about-deep);
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.15;
  margin-bottom: 20px;
}

.lead-text {
  color: var(--about-ink);
  margin-bottom: 14px;
  font-size: 1.08rem;
  max-width: 700px;
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.hero-chips span {
  background: rgba(15, 29, 58, 0.07);
  border: 1px solid rgba(15, 29, 58, 0.12);
  color: var(--about-deep);
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.92rem;
}

.hero-card {
  background: var(--about-surface);
  border-radius: 22px;
  padding: 34px 28px;
  border: 1px solid rgba(15, 29, 58, 0.09);
  box-shadow: 0 24px 45px rgba(14, 28, 54, 0.12);
  animation: float-card 3.5s ease-in-out infinite;
}

.hero-card h2 {
  color: var(--about-deep);
  font-size: 1.45rem;
  margin-bottom: 18px;
}

.hero-card ul {
  margin-bottom: 18px;
}

.hero-card li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: var(--about-ink);
  font-weight: 500;
}

.hero-card i,
.feature-item i {
  color: var(--about-primary);
}

.hero-card .btn,
.cta-panel .btn {
  background: linear-gradient(135deg, var(--about-primary), #cf0f4a);
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 999px;
}

.content-section {
  padding: 80px 0;
}

.alt-bg {
  background: linear-gradient(180deg, var(--about-soft) 0%, #fff 100%);
}

.section-head {
  margin-bottom: 28px;
}

.section-head h2 {
  font-family: "Fraunces", "Spartan", serif;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  color: var(--about-deep);
}

.section-copy {
  color: var(--about-muted);
  margin-bottom: 18px;
  max-width: 900px;
}

.story-panel {
  background: #fff;
  border-radius: 18px;
  padding: 30px;
  border: 1px solid rgba(15, 29, 58, 0.08);
  box-shadow: 0 14px 30px rgba(12, 24, 49, 0.06);
}

.story-panel p {
  color: var(--about-ink);
  margin-bottom: 14px;
}

.story-panel p:last-child {
  margin-bottom: 0;
}

.value-card,
.audience-card {
  height: 100%;
  background: #fff;
  border: 1px solid rgba(15, 29, 58, 0.09);
  border-radius: 18px;
  padding: 26px;
  box-shadow: 0 10px 28px rgba(9, 20, 41, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.value-card:hover,
.audience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(9, 20, 41, 0.12);
}

.icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(230, 26, 90, 0.14);
  margin-bottom: 14px;
}

.icon-wrap i {
  color: var(--about-primary);
  font-size: 1.35rem;
}

.value-card h3,
.audience-card h3 {
  font-family: "Fraunces", "Spartan", serif;
  color: var(--about-deep);
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.value-card p,
.audience-card p {
  color: var(--about-muted);
  margin-bottom: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.feature-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid rgba(15, 29, 58, 0.08);
  border-radius: 14px;
  padding: 16px;
}

.feature-item p {
  color: var(--about-ink);
  margin-bottom: 0;
}

.cta-panel {
  margin-top: 34px;
  border-radius: 20px;
  padding: 36px;
  background: linear-gradient(135deg, var(--about-deep), #1b2f59);
  color: #fff;
}

.cta-panel h3 {
  color: #fff;
  margin-bottom: 10px;
}

.cta-panel p {
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 18px;
}

@keyframes float-card {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .about-hero {
    padding-top: 130px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .about-hero {
    padding: 120px 0 72px;
  }

  .hero-card,
  .story-panel,
  .value-card,
  .audience-card,
  .cta-panel {
    padding: 22px;
  }
}
</style>
