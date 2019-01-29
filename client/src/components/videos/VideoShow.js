import React from 'react';
import { connect } from 'react-redux';

import { getVideo } from '../../actions';

class VideoShow extends React.Component {
  componentDidMount() {
    this.props.getVideo(this.props.match.params.id);
  }

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <h1>Video Detail</h1>
        <div
          style={{
            position: 'relative',
            height: 0,
            paddingBottom: `56.25%`,
            paddingTop: '25px'
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${this.props.video.videoLink}`}
            frameBorder="0"
            allowFullScreen
            title={this.props.video.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <h2>{this.props.video.title}</h2>
        <h5>{this.props.video.description}</h5>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { video: state.videos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getVideo }
)(VideoShow);
