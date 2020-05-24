import React, {Component} from 'react';
import SingleVideo from './SingleVideo';

export default class ListVideos extends Component {
    render() {
        const videos = this.props.videos
        return (
            videos.map((video, i) => {
              return <SingleVideo key={i} video={video} onVideoSelect={this.props.onVideoSelect}/>
            })
        );
    }
}