<template>
    <div class="wrap">
        <div>
            {{from}}
            <button @click="submit">按钮</button>
            <router-link to="/test">路由跳转</router-link>
        </div>
        
    </div>    
</template>
<script>
import Bus from '../assets/bus'
import test from './test'
export default {
    name:"three",
    components:{
        test
    },
    data(){
        return {
            from:"非父子组件"
        }
    },
    mounted(){
        
    },
    methods:{
        submit(){
            let url = this.$api.queryAll;
            let data = {
                a:"1"
            };
            this.$get(url,data).then(res=>{
                console.log(res);
            })
            // Bus.$emit('busVal',this.from);
            this.$router.push({
                name:'/test',
                params:{
                    id:1,
                    name:"Hello word"
                }
            })
            // this.$router.push({
            //     path:'/test',
            //     query:{
            //         id:1,
            //         name:"Hello word"
            //     }
            // })
        }
    }
}
</script>
<style>

</style>
