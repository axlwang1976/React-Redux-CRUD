import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ModalComponent = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onClose}>
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <Header>{props.title}</Header>
        <Modal.Content>{props.description}</Modal.Content>
        <Modal.Actions>
          <Link className="ui button secondary" to="/">
            <Icon name="remove" /> No
          </Link>
          <Button negative onClick={() => props.onDelete(props.id)}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default ModalComponent;
