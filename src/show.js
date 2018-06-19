var React =require('react');
var createClass=require('create-react-class');


var Tiltle=createClass({
   render:function(){
     return (<h3> Tiltle: {this.props.showTitle}</h3>);
   }
});


var Poster =createClass({
  render:function () {
    return(
      <div>
      <img src={this.props.showPoster } alt="Show Poster"  style={{height:400, width:400}}/>
      </div>
    );

  }
});

var ShowInfo =createClass({
  render: function(){
    return(
      <div>
      <p>Plot:{this.props.showPlot}</p>
      <h5>IMDB Rating: {this.props.showRating}</h5>
      </div>

    );

  }
});


var Show =createClass({
  getDefaultProps: function(){
    return{
      showIndex:0
    };
  },
  getInitialState: function(){
  return{
    showIndex:(this.props.showIndex || 0)
  } ;
},


handleBtnClick: function(){
var totalShows = this.props.shows.length;
this.setState(function(prevState){
  return{
    showIndex:(prevState.showIndex + 1) % totalShows
  }
});
},

  render:function(){
    var show = this.props.shows[this.state.showIndex];
    return(
      <div className="text-center">
        <Tiltle showTitle={show.title} />
        <Poster showPoster={show.poster} />
        <ShowInfo showPlot={show.plot} showRating={show.imdbRating} />
        <button onClick={this.handleBtnClick}>Next Show</button>
      </div>
    );
  }
});

module.exports= Show;
