<template>
  <div class="page">
    <template v-for="(message, index) in messages">
      <Message v-if="index <= currentIndex"
               :messageData="message" 
               :key="index" 
               :index="index" 
               :reiterate="choices[message.reiterate]"
               @advance="handleAdvance" />
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
      choices: {},
      messages: [
        { incoming: true, text: 'Hello! Please choose from one of the options below:', autoAdvance: 3000 },
        { incoming: false, options: ['Option A', 'Option B', 'Option C'] },
        { incoming: true, text: '? Great choice!', reiterate: 1 },
      ]
    }
  },
  methods: {
    handleAdvance(i, option) {
      // save the chosen answer
      this.choices[i] = option
      // set the current value, just in case we are setting it again for an answer change
      this.currentIndex = i
      setTimeout(()=>this.currentIndex = i+1, 0)
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
