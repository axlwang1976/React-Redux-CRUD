import React from 'react';
import { connect } from 'react-redux';
import { List, Item, Icon } from 'semantic-ui-react';

import { getVideos } from '../../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <Item key={post.id}>
          <Icon name="file alternate" size="large" className="middle aligned" />
          <Item.Content>
            <Item.Header>{post.title}</Item.Header>
            <Item.Description>{post.body}</Item.Description>
          </Item.Content>
        </Item>
      );
    });
  };

  render() {
    return (
      <>
        <h2>Videos</h2>
        {/* <List celled>{this.renderList()}</List> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { posts: Object.values(state.posts) };
};

export default connect(
  mapStateToProps,
  { getVideos }
)(PostList);
