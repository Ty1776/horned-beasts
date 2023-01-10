import React from 'react';

class HornedBeast extends React.Component{
  
constructor(props) {
  super(props);
  this.state = {
    hearts: 0,
  }
}
  
handleHearts = () => {
  this.setState({
    hearts: this.state.hearts + 1 
  });
}

  render(){
    return(
      <> 
        <h2>{this.props.title}</h2>
        <h3>❤️ {this.state.hearts}</h3>
        <img onClick={this.handleHearts} src={this.props.image_url} title={this.props.title} alt={this.props.description}></img>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;
