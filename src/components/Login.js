import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react';

const Login = props => (
  <List>
    <List.Item>
      <Button color="red" onClick={() => props.onSignInClick('Google')}>
        <Icon name="google" />
        Sign in with Google
      </Button>
    </List.Item>
    <List.Item>
      <Button color="blue" onClick={() => props.onSignInClick('Facebook')}>
        <Icon name="facebook" />
        Sign in with Facebook
      </Button>
    </List.Item>
    <List.Item>
      <Button color="green" onClick={() => props.onSignInClick('Github')}>
        <Icon name="github" />
        Sign in with GitHub
      </Button>
    </List.Item>
  </List>
);

export default Login;
