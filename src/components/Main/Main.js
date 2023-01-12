import React from 'react';
import HornedBeast from '../HornedBeast';
import '../../components/Main/Main.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';


class Main extends React.Component {

  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.props.handleSelect}>
              <option>View All, Even or Odd number of Horns</option>
              <option value="all">All</option>
              <option value="even">Even</option>
              <option value="odd">Odd</option>
            </Form.Select>
          </Form.Group>
        </Form>

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