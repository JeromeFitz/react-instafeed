[![Greenkeeper badge](https://badges.greenkeeper.io/JeromeFitz/react-instafeed.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/JeromeFitz/react-instafeed/master.svg)](https://travis-ci.org/JeromeFitz/react-instafeed)
[![NPM version](https://img.shields.io/npm/v/react-instafeed.svg)](https://www.npmjs.org/package/react-instafeed)

# ⚛️ React + 🖼️ Instafeed = 😀️
[React](https://facebook.github.io/react/) implementation of [Instafeed.js](http://instafeedjs.com/)

> Instafeed.js is a dead-simple way to add Instagram photos to your website. No jQuery required, just plain 'ol javascript.

## 👩‍💻️ Install:

```shell

npm install react-instafeed --save
```

*... or*

```shell

yarn add react-instafeed
```

## 🔑 Usage:

### Import
```javascript

import Instafeed from 'react-instafeed';
```
### Render
```javascript
  const instafeedTarget = 'instafeed';
  return (
    <div id={instafeedTarget}>
      <Instafeed
        limit='5'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template=''
        userId='userIdInstagramApiString'
        clientId='clientIdInstagramApiString'
        accessToken='accessTokenInstagramApiString'
      />
    </div>
  )
```

### 📓️ Notes (mostly from `instafeedjs.com`):

- `limit` - Maximum number of Images to add.
- `resolution` -  Size of the images to get. Available options are:
- - `thumbnail` (default) - 150x150
- - `low_resolution` - 306x306
- - `standard_resolution` - 612x612
- `sortBy` - Sort the images in a set order. Available options are:
- - `none` (default) - As they come from Instagram.
- - `most-recent` - Newest to oldest.
- - `least-recent` - Oldest to newest.
- - `most-liked` - Highest # of likes to lowest.
- - `least-liked` - Lowest # likes to highest.
- - `most-commented` - Highest # of comments to lowest.
- - `least-commented` - Lowest # of comments to highest.
- - `random` - Random order.
- `target` - The ID of a DOM element you want to add the images to.
- - This can be to whatever you via `instafeedTarget`
- `template` - Custom HTML template to use for images.

In `template` do not use className (React), HTML standards apply.
Default (if nothing is passed):
```html

`<a href='{{link}}' target='_blank' class='instafeed__item'>
  <img class='instafeed__item__background' src='{{image}}' />
    <div class='instafeed__item__overlay'>
      <div class='instafeed__item__overlay--inner'>
        <p class='instafeed__item__caption'>{{model.short_caption}}</p>
        <p class='instafeed__item__location'>{{location}}</p>
      </div>
    </div>
</a>`
```
#### Further Documentation
http://instafeedjs.com/
https://github.com/stevenschobert/instafeed.js

As well as a breakdown of some advanced functionality in this issue:
https://github.com/stevenschobert/instafeed.js/issues/21

#### API
`instafeed.js` is client facing library, so your API Keys and the like kind of need to be in the code to work. If there is a more secure way of doing this, please submit an Issue / Pull Request / etc.

These are set explicitly in this example, however, in my usual build process I have been using [babel-plugin-transform-define](https://github.com/FormidableLabs/babel-plugin-transform-define).

**Before:**
```javascript

userId='userIdInstagramApiString'
clientId='clientIdInstagramApiString'
accessToken='accessTokenInstagramApiString'
```
**After:**
```javascript

userId={`${INSTAGRAM_USER_ID}`} // eslint-disable-line no-undef
clientId={`${INSTAGRAM_CLIENT_ID}`} // eslint-disable-line no-undef
accessToken={`${INSTAGRAM_ACCESS_TOKEN}`} // eslint-disable-line no-undef
```

If you are using [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts), add your keys to your `.env` file with the `REACT_APP_` precursor:

```javascript

userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
```

FYI: Technically your API Keys are not in your Repo, however, they will still absolutely be in your end build javascript.

## 🙌 Props
Super props to the React, Instafeed, and Instagram teams.

## ❤️ "Legal"
This software is provided as-is, and all that usually lovely stuff.
