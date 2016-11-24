import Vue from 'vue';
import Hello from './hello.vue';

console.log("It's working");

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(Hello);
  }
});
