import React from 'react';
import { connect } from 'react-redux';

import { createVideo } from '../../actions';
import VideoForm from './VideoForm';

class VideoCreate extends React.Component {
  onFormSubmit = formValues => {
    this.props.createVideo(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a video</h3>
        <VideoForm onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createVideo }
)(VideoCreate);
