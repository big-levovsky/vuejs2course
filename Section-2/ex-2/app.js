new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Baaa!!");
            },
            onKeyDown: function(event) {
                this.value = event.target.value;
            }
        }
    });