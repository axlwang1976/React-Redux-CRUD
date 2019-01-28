import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getVideo, editVideo } from '../../actions';
import VideoForm from './VideoForm';

class VideoEdit extends React.Component {
  componentDidMount() {
    this.props.getVideo(this.props.match.params.id);
  }

  onFormSubmit = formValues => {
    this.props.editVideo(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.video) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div>
          <h3>Edit this video</h3>
          <VideoForm
            initialValues={_.pick(
              this.props.video,
              'title',
              'description',
              'videoLink'
            )}
            onFormSubmit={this.onFormSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { video: state.videos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getVideo, editVideo }
)(VideoEdit);
