import React from 'react';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {


  render() {
    return (
      <>
        <Modal show={this.props.openModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>{this.props.title}</Modal.Header>
          <Modal.Body>
            <img src={this.props.image_url} alt={this.props.description} width='100%' />
            <p>{this.props.description}</p>
            <p> # of horns: {this.props.horns} </p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;