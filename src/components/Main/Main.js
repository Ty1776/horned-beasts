import React from 'react';
import HornedBeast from '../HornedBeast';


class Main extends React.Component{
  
  render(){
    return(
      <>
        {this.props.beastData.map((hornedBeast, idx) => {
          return <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} description={hornedBeast.description} key = {idx} />
        })}
      </>
    )
  }
}

export default Main;