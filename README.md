[![Greenkeeper badge](https://badges.greenkeeper.io/JeromeFitz/react-instafeed.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/JeromeFitz/react-instafeed/master.svg)](https://travis-ci.org/JeromeFitz/react-instafeed)
[![NPM version](https://img.shields.io/npm/v/react-instafeed.svg)](https://www.npmjs.org/package/react-instafeed)

# ⚛️ React + 🖼️ Instafeed = 😀️
[React](https://facebook.github.io/react/) implementation of [Instafeed.js](http://instafeedjs.com/)

> Instafeed.js is a dead-simple way to add Instagram photos to your website. No jQuery required, just plain 'ol javascript.

No {{templating}}. Just returns the top-level object from Instagram in a React Wrapper Component.
Do with it, what you will.

## 👩‍💻️ Install:
```shell
yarn add react-instafeed --save
```

## 🔑 Beta Usage Only
**Beta Note:** This is in-flux at the moment, and will not be production ready until we move to 1.0.0. This is mostly broken until further notice. Continue to use the stable `master` branch.

## 🛑️ Please read:
You probably do not need this. You can make your own API Call to Instagram in either:
- componentDidMount
- getInitialProps
Then you own how this is done and are not reliant on a 3rd party of a 3rd party.

### Import
```javascript

import { instafeed } from 'react-instafeed'
```
### Render
```javascript
  instafeed({
      limit: "5",
      resolution: "standard_resolution",
      sortBy: "most-recent",
      get: "user",
      userId: `${__INSTAGRAM_USER_ID__}`, // eslint-disable-line no-undef
      clientId: `${__INSTAGRAM_CLIENT_ID__}`, // eslint-disable-line no-undef
      accessToken: `${__INSTAGRAM_ACCESS_TOKEN__}` // eslint-disable-line no-undef
    });
  )
```

### 📓️ Notes (mostly from `instafeedjs.com`):

#### Variables

- `limit` - Maximum number of Images to add.
- `resolution` -  Size of the images to get. Available options are:
- - `thumbnail` (**default**) - 150x150
- - `low_resolution` - 320x320
- - `standard_resolution` - 640x640
- `sortBy` - Sort the images in a set order. Available options are:
- - `none` (**default**) - As they come from Instagram.
- - `most-recent` - Newest to oldest.
- - `least-recent` - Oldest to newest.
- - `most-liked` - Highest # of likes to lowest.
- - `least-liked` - Lowest # likes to highest.
- - `most-commented` - Highest # of comments to lowest.
- - `least-commented` - Lowest # of comments to highest.
- - `random` - Random order.

#### Variable Return
Per item...
- attribution
- caption
- - created_time
- - from
- - id
- - text
- comments
- - count
- created_time
- filter
- id
- images ***(for:*** *low_resolution, standard_resolution, thumbnail**)***
- - height
- - url
- - width
- likes
- - count
- link
- location
- tags
- type
- user
- - full_name
- - id
- - profile_picture
- - username
- user_has_liked
- users_in_photo




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
