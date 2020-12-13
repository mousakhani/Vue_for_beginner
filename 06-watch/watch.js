var t=new Vue({
    el:'#watch',
    data:{
        kilometer:0,
        meter:0,
        isactive:true,
    },
    methods:'',
    computed:'',
    watch:{
        kilometer: function (val){
            this.meter=val*1000;
            this.kilometer=val;
        },
        meter:function (val){
            this.kilometer=val/1000;
            this.meter=val;
        },
    },

})