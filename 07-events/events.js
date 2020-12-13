new Vue({
    el: '#event1',
    data: {
        num1: 0,
        num2: 0,
        result: 0,
    },
    methods: {
        sum: function () {
            this.result = Number(this.num1) + Number(this.num2);
        },
        sub: function () {
            this.result = this.num1 - this.num2;
        },
        div: function () {
            this.result = this.num1 / this.num2;
        },
        multi: function () {
            this.result = this.num1 * this.num2;
        }
    }
});

new Vue({
    el: '#event2',
    data: {
        styleobj: {
            height: '100px;',
            width: '100px;',
            backgroundColor: 'green',
        }
    },
    methods: {
        change_color: function () {
            if (this.styleobj.backgroundColor == 'green')
                this.styleobj.backgroundColor = 'red';
            else
                this.styleobj.backgroundColor = 'green';
        }
    }
});