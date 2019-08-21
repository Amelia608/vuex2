import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    count:0,
    userName:'june',
    storeId:25,
    todos:[
      {id:1,text:'...',done:true},
      {id:2,text:'...',done:false},
    ]
  },
  mutations:{
    increment(state,v){
      state.count= state.count+v
    },
    addTodo(state,v){
      state.todos.push(v)
    },
  },
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done)
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
