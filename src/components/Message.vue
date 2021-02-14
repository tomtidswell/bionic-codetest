<template>
  <div class="message" :class="{ incoming: messageData.incoming }">
    <div class="avatar"><span>{{ name }}</span></div>
    <Thinking v-if="pending" />
    <div class="content" v-else>
      <div class="text" v-if="messageData.text">
        <strong v-if="messageData.reiterate">{{reiterate}}</strong>{{messageData.text}}
      </div>
      <Options v-if="messageData.options" @choice="handleOptionChoice" :options="messageData.options" />
    </div>
  </div>
</template>

<script>
import Thinking from './Thinking'
import Options from './Options'

export default {
  name: "Message",
  components: {
    Thinking,
    Options
  },
  props: {
    messageData: Object,
    index: Number,
    reiterate: String
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
    handleOptionChoice(option) {
      console.log('advance', this.index, option)
      this.$emit('advance', this.index, option)
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
  font-family: "Helvetica Neue";
  font-size: 18px;
  line-height: 26px;
}
.content{
  background-color: #ffffff;
  flex-basis: 60%;
  padding: 12px 32px;
  border-radius: 16px 0 16px 16px;
}
.text{
  padding: 20px 0;
}
.avatar{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  background-color: $dark-blue;
  border-radius: 100%;
  margin: 0 0 0 18px;
  color: white;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
}
/* incoming (bot) overrides */
.message.incoming{
  flex-direction: row;
  .content{
    color: $dark-blue;
    border-radius: 0 20px 20px 20px;
    background-color: $light-grey-background;
  }
  .avatar{
    margin: 0 18px 0 0;
    background-color: $light-blue;
    color: #1C1F4E;
    font-size: 28px;
    span{
        margin-bottom: 4px;
    }
  }
}
@media screen and (max-width: 600px){
  .message,
  .message.incoming {
    flex-direction: column;
    .avatar{
      margin-bottom: 18px;
      align-self: flex-end;
    }
  }
  .message.incoming .avatar{ 
    align-self: flex-start;
  }
}
</style>
