import React, { Component } from 'react';
import '../App.css';

class WRD extends Component {

componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
      <div id="about">
          <div className="row">
              <div className="col-md-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="about">
                    <h5 className="hidden-xs-down l-content">World Rainforest Day</h5>
                  </div>
                </div>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <h3 className="wrd-header">Because the World Can't Wait</h3>
                <br/>
                <p>World Rainforest Day is a collaborative effort to encourage awareness and compel action to save one of the earth’s most precious resources, our rainforests.</p>
                <p>Climate change is having a catastrophic impact on rainforest ecosystems. Increasing dramatic weather events are devastating rainforest communities, while deforestation caused by individuals and industry threatens our biodiversity and imperils our planet’s health.</p>  
                <p>World Rainforest Day is an opportunity to celebrate this precious natural resource and take action to preserve it. Your actions will combine with the actions of others to create a collective positive impact on rainforests and the climate worldwide.</p>
                <p>Do something today to help save the rainforests. Because the world can’t wait.</p>
                <p>Share how you’re helping to save the world’s rainforests </p>
                <p><a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></p>
              </div>
          </div>
      </div>
    );
  }
}

export default WRD;