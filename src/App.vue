<template>
  <div id="app">
    <header>
      <div class="corners"></div>
    </header>
    <main>
      <Page />
    </main>
  </div>
</template>

<script>
import Page from "./components/Page.vue";

export default {
  name: "App",
  components: {
    Page
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  box-sizing: border-box;
  background-color: $page-background;
  color: $mid-blue;
}
header {
  display: flex;
  align-items: flex-end;
  height: 100px;
  background-color: $dark-blue;
  .corners {
    background-color: $page-background;
    height: 20px;
    flex-basis: 100%;
    border-radius: 20px 20px 0 0;
  }
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;
}
</style>
