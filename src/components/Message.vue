<template>
  <div class="message" :class="{ incoming: messageData.incoming }">
    <div class="avatar">{{ name }}</div>
    <Thinking v-if="pending" />
    <div class="content" v-else>
      <div class="text">{{messageData.text}}</div>
      <div class="options" @click="handleOptionChoice">{{messageData.options}}</div>
    </div>
  </div>
</template>

<script>
import Thinking from './Thinking'
export default {
  name: "Message",
  components: {
    Thinking
  },
  props: {
    messageData: Object,
    index: Number
  },
  data() {
    return {
      pending: true,
    }
  },
  created(){
    if(!this.messageData.incoming) this.pending = false
  },
  mounted(){
    console.log('Hello', this.index)
    setTimeout(()=>{this.pending = false}, 1000)
    if(this.messageData.autoAdvance) setTimeout(()=>this.$emit('advance', this.index), this.messageData.autoAdvance)
  },
  computed: {
    text() {
      return this.messageData.text || ''
    },
    name() {
      return this.messageData.incoming ? 'm' : 'Me'
    }
  },
  methods: {
    handleOptionChoice() {
      this.$emit('advance', this.index, 'CHOSEN')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
}
.content{
  background-color: #ffffff;
  flex-basis: 60%;
  padding: 40px 30px;
  border-radius: 20px 0 20px 20px;
}
.avatar{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: #1c1f4e;
  border-radius: 100%;
  margin: 0 20px;
}
/* incoming (bot) overrides */
.message.incoming{
  flex-direction: row;
  .content{
    border-radius: 0 20px 20px 20px;
    background-color: #edf0f2;
  }
  .avatar{
    background-color: #c8edfc;
  }
}
</style>
