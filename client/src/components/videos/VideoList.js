import React from 'react';
import { connect } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { getVideos } from '../../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getVideos();
  }

  renderList = () => {
    return this.props.videos.map(video => {
      return (
        <List.Item key={video.id}>
          {this.renderBtn(video)}
          <Icon name="youtube" size="large" className="middle aligned" />
          <List.Content>
            <List.Header>{video.title}</List.Header>
            <List.Description>{video.description}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  };

  renderBtn = video => {
    if (video.userId === this.props.userId) {
      return (
        <List.Content floated="right">
          <Link
            to={`/videos/delete/${video.id}`}
            className="ui negative button"
          >
            Delete
          </Link>
          <Link to={`/videos/edit/${video.id}`} className="ui primary button">
            Edit
          </Link>
        </List.Content>
      );
    }
  };

  renderCreateBtn = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/videos/new" className="ui button primary right floated">
          Create Video
        </Link>
      );
    }
  };

  render() {
    return (
      <>
        <h2>Videos</h2>
        <List celled>{this.renderList()}</List>
        {this.renderCreateBtn()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: Object.values(state.videos),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getVideos }
)(PostList);
