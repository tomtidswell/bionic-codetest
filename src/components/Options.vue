<template>
  <div class="options">
    <label v-for="(option, index) in options" :key="option" class="option">
      <input type="radio" :value="option" v-model="choice" @change="$emit('choice', option)">
      <span class="radio"></span>
      <span class="value">{{option}}</span>
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
  height: 66px;
  border-bottom: 1px solid $light-grey;
  cursor: pointer;
  &:last-child{
    border-bottom: 0;
  }
  input{
    display: none;
  }
  .value{
    line-height: 20px;
  }
}
.radio{
  display: inline-block;
  width: 26px;
  height: 26px;
  margin: 0 22px 2px 0;
  border: 2px solid $very-light-grey;
  background-color: white;
  border-radius: 100%;
  box-sizing: border-box;
  &:hover{
    border-color: $very-light-grey;
    background-color: $very-light-grey;
  }
}
input:checked + .radio {
  border-color: $dark-blue;
  background-color: $dark-blue;
}
input:checked ~ .value {
  font-weight: 700;
  line-height: 21px;
}
</style>
