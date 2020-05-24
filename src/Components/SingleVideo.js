import React, { Component } from 'react';
import './SingleVideo.css';

class SingleVideo extends Component {
    
    render() {
        const video = this.props.video
        
        return (    
            <div className="ui item" onClick={() => {this.props.onVideoSelect(video)}}>
                <div className="item">
                        <a className="ui image" style={{marginBottom: "10px"}}>
                        <img src={video.snippet.thumbnails.medium.url}/>
                        </a>
                        
                    <div className="content" style={{marginBottom: "10px"}}>
                        <a className="header line-height" style={{color: "DarkCyan"}}>{video.snippet.title}</a>
                        {/* <div className="description" style={{color: "LightSlateGrey"}}>
                            <p>{video.snippet.description}</p>
                        </div> */}
                    </div>
                    <hr />
            </div>
            </div>
         );
        }
    } 
export default SingleVideo;