<template>
  <header class="nav-container">
    <h1>Skyline Store</h1>

    <nav class="nav-menu">
      <ul class="nav-list">
        <nuxt-link class="navlink" to="/">
          <div>Home</div>
        </nuxt-link>

        <nuxt-link class="navlink" to="/">
          <div>All</div>
        </nuxt-link>

        <nuxt-link class="navlink" to="/">
          <div>Women</div>
        </nuxt-link>

        <nuxt-link class="navlink" to="/">
          <div>Men</div>
        </nuxt-link>

        <nuxt-link class="navlink" to="/">
          <div>Cart</div>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 0px;
}

.nav-menu {
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 0px;
}

.nav-menu .nav-list {
  display: flex;
  padding-left: 0px;
}
.nav-menu .nav-list .navlink {
  display: inline;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 13px;
  padding: 0px 20px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  position: relative;
  text-decoration: none;
  color: #000;
}

.nav-menu .nav-list .navlink:hover {
  color: #c14103;
  text-decoration: underline;
}

@media screen and (max-width: 850px) {
  h1 {
    margin: 0;
  }
  .nav-menu .nav-list .navlink {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
}
</style>
