import React from 'react';
import Card from 'react-bootstrap/Card';

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
      <Card bg={'secondary'} border={'primary'} style={{width: '15rem'}}>
        <h2>{this.props.title}</h2>
        <h3>❤️ {this.state.hearts}</h3>
        <img onClick={this.handleHearts} src={this.props.image_url} title={this.props.title} alt={this.props.description}></img>
        <p>{this.props.description}</p>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
