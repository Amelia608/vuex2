<template>
  <div id="app">
    <h1>Sate</h1>
    <h3>{{count}}</h3>
    <p>{{userName}}</p>
    <p>{{fullName}}</p>

    <button @click="clickHandle($event,'add')">++</button>
    <hr/>
    <h1>Getter</h1>
    <button @click="addData">新增数据</button>
     <p>{{doneTodos}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      firstName:'chen'
    }
  },
  computed:{
    fullName(){
      return this.firstName+this.userName
    },
    doneTodos(){
      return this.$store.getters.doneTodos
    },
    ...mapState(['count','userName'])
  },
  mounted(){
    console.log(this.$store.state)
  },
  methods:{
    clickHandle(e,type){
      this.$store.commit('increment',3)
    },
    addData(){
      let obj={id:3,text:'...',done:true}
      this.$store.commit('addTodo',obj)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
