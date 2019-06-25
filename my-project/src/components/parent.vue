<template>
    <div>
        A组件
        <span>{{msg}}</span>
        <input type="button" value="点击触发" @click="elementClick">
    </div>
</template>
<script>
    // 引入公共的bug，来做为中间传达的工具
    import Bus from '../assets/bus.js'
    export default {
        data(){
            return {
                msg:4
            }
        },
        mounted(){
            let that = this;
            Bus.$on('busVal',(v)=>{
                this.msg = v;
            })
        },
        methods:{
            elementClick(){
                Bus.$emit('val',this.msg);
            }
        }
    }

</script>