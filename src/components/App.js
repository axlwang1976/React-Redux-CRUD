import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import VideoList from './videos/VideoList';
import VideoCreate from './videos/VideoCreate';
import VideoEdit from './videos/VideoEdit';
import VideoShow from './videos/VideoShow';
import VideoDelete from './videos/VideoDelete';

const App = () => (
  <Container>
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/videos/new" exact component={VideoCreate} />
          <Route path="/videos/edit" exact component={VideoEdit} />
          <Route path="/videos/show" exact component={VideoShow} />
          <Route path="/videos/delete" exact component={VideoDelete} />
        </Switch>
      </>
    </BrowserRouter>
  </Container>
);

export default App;
