var React = require('react');
var MainScene = require('./MainScene');
var mainSceneModel = {
  sentence : {
      img : 'http://fit4brain.com/wp-content/uploads/2014/05/cat.jpg'
      , option1 : 'this is option1'
      , option2 : 'this is option2'
  }  
};

var App = React.createClass({
	render: function() {
		return (
            <div>
			 <h1>Hello world!</h1>
                <MainScene model={mainSceneModel}/>
            </div>
		);
	}
	
});
	
module.exports = App;