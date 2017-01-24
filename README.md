# React + Instafeed = 😀️
[React](https://facebook.github.io/react/) implementation of [Instafeed.js](http://instafeedjs.com/)

> Instafeed.js is a dead-simple way to add Instagram photos to your website. No jQuery required, just plain 'ol javascript.

## Install:

```shell

npm install react-instafeed --save
```

... or

```shell

yarn add react-instafeed
```

😬️ - This isn't an NPM Module yet, though.

## Usage:

### Resolutions
- `thumbnail`
- `low_resolution`
- `standard_resolution`

```javascript
import Instafeed from 'react-instafeed';

export default class InstafeedComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      instafeedLoaded: false
    };
  }

  componentDidMount() {
    this.setState({
      instafeedLoaded: true
    });
  }

  renderInstafeed() {
    if (!this.state.instafeedLoaded) {
      // 📓️ NOTE: Do not use className (React), HTML standards apply
      // Below provided is the default as an example
      // Anything you put here will be take precedence
      const instafeedTemplate = `
            <a href="{{link}}" target="_blank" class="instafeed__item">
              <img class="instafeed__item__background" src="{{image}}" />
                <div class="instafeed__item__overlay">
                  <div class="instafeed__item__overlay--inner">
                    <p class="instafeed__item__caption">{{model.short_caption}}</p>
                    <p class="instafeed__item__location">{{location}}</p>
                  </div>
                </div>
            </a>`;
      const instafeed = <Instafeed
        userId='[GOES-HERE]'
        clientId='[GOES-HERE]'
        accessToken='[GOES-HERE]'
        target='instafeed'
        resolution='standard_resolution'
        limit='1'
        sortBy='most-recent'
        ref='instafeed'
        template={instafeedTemplate}
        customClass={this.state.instafeedLoaded ? 'loaded' : ''}
        />;
      return instafeed;
    }

  }

  render() {
    return (
      {this.renderInstafeed()}
    )
  }
}  
```

You can set your variables directly in your component: `[GOES-HERE]` (without brackets)

`instafeed.js` is client facing library, so your API Keys and the like kind of need to be in the code to work. If there is a more secure way of doing this, please submit an Issue / Pull Request / etc.

## Note
This software is provided as-is, and all that usually lovely stuff. ❤️

## Props
Super props to the React, Instafeed, and Instagram team. 🙌️
