import React, { Component } from 'react';
import '../App.css';

class Twitter extends Component {

componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
        <section className="container">
          <div className="twitter space">
            <h3 className="Header">Happening Now <a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></h3>
            <h4>Share how you’re helping to save the world’s rainforests.</h4>
            <hr />
            <iframe className="twitter-frame" frameBorder="1" src="http://rainforestpartnership.tweetwally.com/embed" target="_blank" scrolling="Auto"></iframe>
          </div>
        </section>
    );
  }
}

export default Twitter;