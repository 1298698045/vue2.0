<template>
    <div class="hell">
        <h1>这是子组件</h1>
        <p>这是父组件传过来的数据：{{getParent}}</p> 
        <button v-on:click="pushData">改变父组件的值</button>
        <p >{{message}}</p>
        <h1>B组件
            <input type="button" value="点击触发" @click="getData">
            <span>{{name}}</span>
        </h1>
    </div>    
</template>
<script>
    import Bus from '../assets/bus.js'
    export default{
        name:'v-child',
        props:{
            message:{},
            getParent:{
                // type:String,
                defalut:'默认值'
            }
        },
        data(){
            return {
                num:this.num,
                n:2,
                name:0
            }
        },
        mounted() {
            console.log(typeof this.getParent);
            // 用$on事件来接收参数
            Bus.$on('val',(data)=>{
                console.log(data);
                this.name = data;
            })
        },
        methods:{
            pushData(){
                this.$emit('push-data',this.n);
            },
            getData(){
                this.name++
            }
        }
    }
</script>
<style scoped>
    h1{
        color:red;
    }
</style>
