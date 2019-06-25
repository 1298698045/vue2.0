<template>
  <div class="helo">
    <h1>父组件的值：{{num}}</h1>
    <v-child :get-parent="num" v-on:push-data="getData" v-bind:message="parentMsg"></v-child>
    <parent></parent>
    <three></three>
    <el-button>Element</el-button>
    <Button>iView</Button>
  </div>
</template>

<script>
import vChild from './vChild'
import parent from './parent'
import three from './three'
import test from './test'
export default {
  name: 'HelloWorld',
  components:{
    vChild,
    parent,
    three,
    test
  },
  data () {
    return {
      num:'12',
      parentMsg:"hello,world!"
    }
  },
  mounted() {
  
  },
  methods:{
    getData(val){
      console.log(val);
      this.num = this.num-0 + val
    }
  }
}
</script>

<style lang="scss">
  .helo{
    h1{
      color:green;
    }
  }
</style>
