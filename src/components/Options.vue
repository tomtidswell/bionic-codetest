<template>
  <div class="options">
    <div v-for="(option, index) in options" :key="option">
      <input type="radio" :id="`option-${index}`" :value="option" v-model="choice" @change="$emit('choice', option)">
      <label :for="`option-${index}`">{{option}}</label>
    </div>
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
.thinking {
  display: flex;
}
</style>
