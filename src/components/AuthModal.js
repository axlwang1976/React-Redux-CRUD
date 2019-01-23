import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import firebase from 'firebase';
import { connect } from 'react-redux';

import Login from './Login';
import { firebaseApp } from '../api/base';
import { signIn, signOut, modalOpen, modalClose } from '../actions';

class AuthModal extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.signIn(user.uid);
      } else {
        this.props.signOut();
      }
    });
  }

  authHandler = async authData => {
    this.props.signIn(authData.user.uid);
  };

  onSignInClick = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
      .then(this.closeHandler());
  };

  onSignOutClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.signOut();
        this.renderBtn();
      });
  };

  openHandler = () => this.props.modalOpen();

  closeHandler = () => this.props.modalClose();

  renderBtn = () => {
    if (!this.props.isSignedIn) {
      return (
        <Modal
          trigger={<Button onClick={this.openHandler}>Sign in</Button>}
          open={this.props.isModalOpened}
          onClose={this.handleClose}
        >
          <Modal.Header>Select yout account</Modal.Header>
          <Modal.Content>
            <Login onSignInClick={this.onSignInClick} />
          </Modal.Content>
        </Modal>
      );
    } else if (this.props.isSignedIn === null) {
      return null;
    } else {
      return (
        <Button primary onClick={this.onSignOutClick}>
          Sign out
        </Button>
      );
    }
  };

  render() {
    return this.renderBtn();
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isModalOpened: state.modal.isModalOpened
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, modalOpen, modalClose }
)(AuthModal);
