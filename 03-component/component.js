Vue.component('component1', {
    template: '<h1 v-on:mouseover="changename()" v-on:mouseout="changename()">My name is {{name}} </h1>',
        data: function () {
        return {
            name: 'Morteza',
        }
    },
    methods: {
        changename: function () {
            if (this.name == 'Morteza')
                this.name = 'Mousa'
            else
                this.name = 'Morteza'
        }
    }
})


new Vue({
    el: '#test1',
})