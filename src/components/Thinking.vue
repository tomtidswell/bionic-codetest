<template>
  <div class="thinking">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.thinking {
  display: flex;
}
.bubble{
  background-color: $mid-blue;
  height: 6px;
  width: 6px;
  margin-right: 4px;
  border-radius: 100%;
  opacity: 0.3;
  &:first-child{
    opacity: 1;
  }
  &:last-child{
    opacity: 0.1;
  }
}
</style>
