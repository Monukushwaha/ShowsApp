var React = require('react');
var ReactDom = require('react-dom');
var Show = require('./show');
var shows = require('./shows');


ReactDom.render(
  <Show shows={shows} showIndex={2 } />,
  document.getElementById('root')
);
