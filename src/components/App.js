import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import PostList from './posts/PostList';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostShow from './posts/PostShow';
import PostDelete from './posts/PostDelete';

const App = () => (
  <Container>
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/new" exact component={PostCreate} />
          <Route path="/posts/edit" exact component={PostEdit} />
          <Route path="/posts/show" exact component={PostShow} />
          <Route path="/posts/delete" exact component={PostDelete} />
        </Switch>
      </>
    </BrowserRouter>
  </Container>
);

export default App;
