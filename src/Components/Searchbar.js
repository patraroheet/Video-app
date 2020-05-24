import React, {Component} from 'react';


export default class SearchBar extends Component {

    state = {
        searchvalue: ''
    }

    onChangeHandler = (e) => {
        this.setState({searchvalue: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchvalue)
    }

    render() {
        return(
    <div className="search-bar ui segment">
    <form  onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
            <label>SEARCH...</label>
            <input type="text" 
            value={this.state.searchvalue}
            onChange={this.onChangeHandler}
            />
        </div>
    </form>
    </div>
   )
    }
}