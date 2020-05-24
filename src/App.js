import React, {Component} from 'react';
import './App.css';
import SearchBar from './Components/Searchbar';
import apis from './Components/apis';
import ListVideos from './Components/ListVideos';
import VideoDetail from './Components/VideoDetail';

class App extends Component {

  state = {
    videos: [],
    SelectedVideo: null
  }

  onSearchSubmit = async (searchvalue) => {
   const res = await apis.get('/search', {
      params: {
        q: searchvalue
      }
    });

    this.setState({
      videos: res.data.items,
      SelectedVideo: res.data.items[0]
    })
  };

  onVideoSelect =(video)=> {
    this.setState({SelectedVideo: video})
  }

  render() {
    console.log(this.state.videos)
    return (
      <div className="App App-header">
        <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.SelectedVideo} />
            </div>
            <div className="five wide column">
            <ListVideos videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }  
}
  

export default App
    

