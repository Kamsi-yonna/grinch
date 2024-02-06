<template>
  <div>
    <section>
      <ul>
        <li>About</li>
        <li>Company</li>
        <li>Locations</li>
        <li>Contact</li>
        <li>Hours</li>
      </ul>
      <ul>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
      <ul>
        <h4>Newsletter:</h4>
        <input type="text" />
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin-left: 10%;
  padding: 40px 0;
}

ul {
  list-style: none;
  padding-left: 0;

  li {
    cursor: pointer;

    width: auto;
  }
  :hover {
    color: #c1403c;
  }
}

input[type="text"] {
  width: 100%;
  color: black;
  box-sizing: border-box;
  padding: 10px 10px;
  border: 1px solid #000;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type="text"]:focus {
  border: none;
  color: black;
  border: 1px solid #000;
}

@media screen and (min-width: 850px) {
  section {
    padding: 40px !important;
  }
}
</style>
