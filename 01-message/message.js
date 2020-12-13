new Vue({
    el: '#msg',
    data: {
        firstname: 'Morteza',
        lastname: 'Mousakani',
    },
    methods: {
        fullname: function () {
            return this.$data.firstname + ' ' + this.lastname
        }
    }
});