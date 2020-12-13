var app = new Vue({
    el: '#dynamic_component',
    data: {
        firstname: 'Morteza',
        lastname: 'Mousakhani',
        view: 'component1',
    },
    methods: {
        component_change: function () {
            this.view = this.view == 'component1' ? 'component2' : 'component1';
        }
    },
    components: {
        component1: {
            template: '<div style="background-color:red;" > My fist name is {{}}</div>',
            data: function () {
                return {
                    firstname: this.firstname,
                }
            },
        },
        component2: {
            template: '<h2 style="background-color:green;">My last name is {{lastname}}</h2>',
            data: function () {
                return {
                    firstname: this.lastname,
                }
            }
        },
    }
});