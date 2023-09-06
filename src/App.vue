<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
  <div id="footer">
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
}
};
</script>