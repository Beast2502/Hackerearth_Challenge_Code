import React, { Component } from 'react';
import "../App.css"

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input onChange={this.props.handleInput} type="text" value = "Search..."></input>
            </div>
        );
    }
}

export default Search;