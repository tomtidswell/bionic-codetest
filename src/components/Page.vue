<template>
  <div class="page">
    <template v-for="(message, index) in messages">
      <Message :messageData="message" :key="index" :index="index" v-if="index <= currentIndex" @advance="handleAdvance"/>
    </template>
  </div>
</template>

<script>
import Message from './Message'
export default {
  name: "Page",
  components: {
    Message
  },
  props: {
    msg: String
  },
  data() {
    return {
      currentIndex: 0,
      messages: [
        { incoming: true, text: 'Hello! Please choose from one of the options below:', autoAdvance: 3000 },
        { incoming: false, options: ['Option A', 'Option B', 'Option C'] },
        { incoming: true, text: 'Option X? Great choice!' },
      ]
    }
  },
  methods: {
    handleAdvance(i, params) {
      console.log('Advancing from', i, params)
      this.currentIndex = i+1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  max-width: 1000px;
  width: 70vw;
  padding-top: 125px;
}
</style>
