import React from 'react';
import HornedBeast from '../HornedBeast';
import '../../components/Main/Main.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {

  render() {
    return (
      <>
        <Container>
          <Row>
            {this.props.beastData.map((hornedBeast, idx) => {
              return <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} description={hornedBeast.description} horns={hornedBeast.horns} key={idx} display={this.props.handleOpenModal} />
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default Main;