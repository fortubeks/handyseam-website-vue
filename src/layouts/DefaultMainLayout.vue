<template>
  <!-- Preloader -->
  <div class="preloader">
    <div class="preloader-inner">
      <div class="preloader-icon">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- /End Preloader -->
  <Header />
  <slot></slot>
  <Footer />

  <!-- ========================= scroll-top ========================= -->
  <a href="#" class="scroll-top">
    <i class="lni lni-chevron-up"></i>
  </a>
</template>

<script setup>
import Header from "@/components/HeaderSection.vue";
import Footer from "@/components/FooterSection.vue";
</script>
