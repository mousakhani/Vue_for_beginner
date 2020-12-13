var app = new Vue({
    el: '#computed',
    data: {
        firstname: 'Morteza',
        lastname: 'Mousakhani',
    },
    computed: {
        getfullname: {
            get: function () {
                return this.firstname + ' ' + this.lastname;
            },
            set: function (val) {
                var names = val.split(' ');
                this.firstname = names[0] || '';
                this.lastname = names[1] || '';
            }
        }
    },
});