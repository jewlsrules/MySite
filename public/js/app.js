console.log('connected');
const app = angular.module('MyApp', []);

app.controller('MyController', function(){
  this.includePath = 'partials/projects.html'

  this.changeInclude = (path) => {
    console.log('clicked!');
    this.includePath = 'partials/' + path + '.html'
  }
});
