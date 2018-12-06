new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
        highlight: true,
        shrink: false
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
        width: '100px',
        height: '150px',
        backgroundColor: 'gray'
    },
    progressBar: {
        width: '0px',
        backgroundColor: 'red'
    },
    intervalId: 0
  },
  methods: {
    startEffect: function() {
      var vm = this;
      this.intervalId = setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    stopEffect: function() {
      clearInterval(this.intervalId);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        if (width <= 200) {
          width += 20;
          vm.progressBar.width = width + 'px';
        }
      },500)
    }
  }
});
