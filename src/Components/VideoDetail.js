import React, { Component } from 'react';

class VideoDetail extends Component {

   
    render() { 
       
        const video = this.props.video
        // const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId
        return (
            
            <div>
                {/* {
                video === {}
                ? <p>Loading.. Frame</p>
                : <div className="ui embed">
                    <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                } */}
                {
                !video
                // ? <div>Loading....</div>
                ? <div>Search Something...</div>
                :<>
                <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                <p>{video.snippet.description}</p>
                </>
                // : <div style={{color: "DarkCyan"}}>{video.snippet.title}</div>
            }
            </div>
                
           
         );
    }
}
 
export default VideoDetail;