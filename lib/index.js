import React from 'react'
import Instafeed from 'instafeed.js'

module.exports = React.createClass({
  display: 'Instafeed',

  propTypes: {
    userId: React.PropTypes.string,
    clientId: React.PropTypes.string,
    accessToken: React.PropTypes.string,
    target: React.PropTypes.string,
    resolution: React.PropTypes.string,
    limit: React.PropTypes.string
  },

  render: function() {
    const feed = new Instafeed({
        target: this.props.target || 'instafeed',
        get: 'user',
        userId: this.props.userId,
        clientId: this.props.clientId,
        accessToken: this.props.accessToken,
        // resolution:"thumbnail",
        // resolution:"low_resolution",
        // resolution:"standard_resolution",
        resolution: this.props.resolution || 'standard_resolution',
        sortBy: this.props.sortBy || 'most-recent',
        limit: this.props.limit || 10,

        filter:function(t){return t.caption&&t.caption.text?(t.short_caption=t.caption.text,t.short_caption.length>160&&(t.short_caption=t.caption.text.slice(0,150)+"..."),t.short_caption=t.short_caption.replace(/(#[a-zA-Z0-9_-]+)/g,'<strong class="hashtag">$1</strong>')):t.short_caption="",!0},

        template:'<a href="{{link}}" target="_blank" className="instafeed-item"><img className="instafeed-item-background" src="{{image}}"><div className="instafeed-item-overlay"><div class="instafeed-item-overlay-inner"><p>{{model.short_caption}}</p><p>{{location}}</p></div></div></a>'
    });
    feed.run();
    
    return (
      <div id={this.props.target || 'instafeed'}></div>
    )
  }
})
