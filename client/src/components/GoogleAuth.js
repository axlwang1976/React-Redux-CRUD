import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '562281096817-qftqqhogbetaq2ncn38vca7pslie8irf.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => this.auth.signIn();

  onSignOutClick = () => this.auth.signOut();

  renderBtn = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (!this.props.isSignedIn) {
      return (
        <Button color="red" onClick={this.onSignInClick}>
          <Icon name="google" />
          Sign in with Google
        </Button>
      );
    } else {
      return (
        <Button color="red" onClick={this.onSignOutClick}>
          <Icon name="google" />
          Sign out
        </Button>
      );
    }
  };

  render() {
    return <div>{this.renderBtn()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
