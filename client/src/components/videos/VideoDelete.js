import React from 'react';
import { connect } from 'react-redux';

import ModalComponent from '../ModalComponent';
import history from '../../history';
import { getVideo, deleteVideo } from '../../actions';

class VideoDelete extends React.Component {
  componentDidMount() {
    this.props.getVideo(this.props.match.params.id);
  }

  onDelete = id => this.props.deleteVideo(id);

  render() {
    return (
      <>
        <h2>Delete Video</h2>
        <ModalComponent
          title="Delete Video"
          description="Are you sure?"
          onClose={() => history.push('/')}
          onDelete={this.onDelete}
          id={this.props.match.params.id}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { video: state.videos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getVideo, deleteVideo }
)(VideoDelete);
