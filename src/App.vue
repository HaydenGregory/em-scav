<template>
  <notifications position="top left" width="300" />
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/background.jpeg");
  height: 100vh;
}

.card {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 2px;
}

.button {
  margin: 10px;
}

.tom {
  margin: 3rem 0 2rem 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
