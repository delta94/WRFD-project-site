import React, { Component } from 'react';
import '../App.css';

class Blog extends Component {

componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
        <div id="blog" className="container">
          <div className="twitter">
            <h1>Celebrate <a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></h1>
            <iframe frameBorder="0" width="550" height="500" src="http://rainforestpartnership.tweetwally.com/embed" target="_blank" scrolling="Auto"></iframe>
          </div>
        </div>
    );
  }
}

export default Blog;