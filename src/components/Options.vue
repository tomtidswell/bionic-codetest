<template>
  <div class="options">
    <label v-for="(option, index) in options" :key="option" class="option">
      <input type="radio" :value="option" v-model="choice" @change="$emit('choice', option)">
      <span class="radio"></span>
      {{option}}
    </label>
  </div>
</template>

<script>
export default {
  name: "Options",
  props: {
    options: Array
  },
  data() {
    return {
      choice: null
    }
  },
  created(){
  },
  mounted(){
  },
  methods: {
    handleOptionChoice() {
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.option {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid blue;
  &:last-child{
    border-bottom: 0;
  }
  input{
    display: none;
  }
}
.radio{
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 8px 2px 0;
  border: 2px solid grey;
  background-color: white;
  border-radius: 100%;
  &:hover{
    border-color: grey;
    background-color: grey;
  }
}
input:checked ~ .radio {
  border-color: blue;
  background-color: blue;
}
</style>
