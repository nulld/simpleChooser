var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

var OptionBlock = React.createClass({
    render : function() {
        return(
           <p>{this.props.opt}</p>
        );
    } 
});

var Sentence = React.createClass({
   
   render: function() {
       return (
           <div>
            <img src={this.props.data.img}/>
                  <OptionBlock opt={this.props.data.option1} />
                  <OptionBlock opt={this.props.data.option2} />
            </div>
       );
   }
});

var MainScene = React.createClass({
    render: function() {
		return (
	       <Sentence data={model.sentence}/>
		);
	}
})

module.exports = MainScene;