<template>
    <div style="z-index:1000;">
        
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Bar Page ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
</template>

<script>
    export default {
        data() {
            return{
                aaa:0,
            }
        },
        mounted() {
           
            console.log(this.aaa)
            this.aaa = 222;
            console.log(this.aaa)
        }
    }
</script>

<style lang="less" scoped>
    
    @width: 50%;
    @height: 300px;

    div{
        width: @width;
        height:  @height;
        margin: 30px auto 0;
        border: 1px solid blue;
    }

</style>

