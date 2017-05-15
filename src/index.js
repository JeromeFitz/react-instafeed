import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Instafeed from 'instafeed.js';

class InstafeedComponent extends Component {

  render() {
    const instafeed = new Instafeed({
      target: this.props.target || 'instafeed',
      get: 'user',
      userId: this.props.userId,
      clientId: this.props.clientId,
      accessToken: this.props.accessToken,
      resolution: this.props.resolution || 'standard_resolution',
      sortBy: this.props.sortBy || 'most-recent',
      limit: this.props.limit || 10,
      filter: (item) => (
        item.caption && item.caption.text ? (
          item.short_caption = item.caption.text,
          item.short_caption.length > 160 &&
            ( item.short_caption = item.caption.text.slice(0,150) + `...` ),
          item.short_caption = item.short_caption.replace(
            /(#[a-zA-Z0-9_-]+)/g,
            `<strong class='instafeed__item__hashtag'>$1</strong>`)
        ) : item.short_caption='',!0 // eslint-disable-line no-sequences
      ),
      template: this.props.template || `
            <a href='{{link}}' target='_blank' class='instafeed__item'>
              <img class='instafeed__item__background' src='{{image}}' />
                <div class='instafeed__item__overlay'>
                  <div class='instafeed__item__overlay--inner'>
                    <p class='instafeed__item__caption'>{{model.short_caption}}</p>
                    <p class='instafeed__item__location'>{{location}}</p>
                  </div>
                </div>
            </a>`
    });
    instafeed.run();

    return (
      <div id={instafeed.target} />
    )
  }
}

InstafeedComponent.propTypes = {
  userId: PropTypes.string,
  clientId: PropTypes.string,
  accessToken: PropTypes.string,
  target: PropTypes.string,
  resolution: PropTypes.string,
  limit: PropTypes.string,
  template: PropTypes.string
}

export default InstafeedComponent;
