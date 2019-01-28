import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import VideoList from './videos/VideoList';
import VideoCreate from './videos/VideoCreate';
import VideoEdit from './videos/VideoEdit';
import VideoShow from './videos/VideoShow';
import VideoDelete from './videos/VideoDelete';
import history from '../history';

const App = () => (
  <Container>
    <Router history={history}>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/videos/new" exact component={VideoCreate} />
          <Route path="/videos/edit/:id" exact component={VideoEdit} />
          <Route path="/videos/:id" exact component={VideoShow} />
          <Route path="/videos/delete/:id" exact component={VideoDelete} />
        </Switch>
      </>
    </Router>
  </Container>
);

export default App;
