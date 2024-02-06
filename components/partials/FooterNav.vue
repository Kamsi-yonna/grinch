<template>
  <footer>
    <section class="callout">
      <h2>
        "The surprising styles of Skyline Ivy are advanced for all seasons."
      </h2>
      <p>Hansel Andersen</p>
    </section>

    <FooterLinks />

    <div class="footer-bottom">
      By
      <a href="http://github.com/Kamsi-yonna" target="_blank">Kamsiyonna</a>
      &copy; {{ currentYear }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.callout {
  border: 1px solid black;
  display: flex;
  height: 280px;

  width: 100%;
  background: url("/public/assets/images/callout.jpg") center center no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}

.callout h2 {
  padding: 0 30px;
  text-align: center;
}

.footer-bottom {
  text-align: center;

  a {
    color: #fff;
  }
  :hover {
    color: #c14103;
    text-decoration: underline;
  }
}
</style>
