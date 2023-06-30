import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: ()=>({
    items: ''
  }),
  actions:{
async getData(){

}
  }
})
