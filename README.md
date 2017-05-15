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

  <Instafeed
    userId='userIdInstagramApiString'
    clientId='clientIdInstagramApiString'
    accessToken='accessTokenInstagramApiString'
    target='instafeed'
    resolution='standard_resolution'
    limit='5'
    sortBy='most-recent'
    ref='instafeed'
    template=''
    />
```

### 📓️ Notes:
#### Resolutions
- `thumbnail`
- `low_resolution`
- `standard_resolution`

#### Template
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
#### Variables
`instafeed.js` is client facing library, so your API Keys and the like kind of need to be in the code to work. If there is a more secure way of doing this, please submit an Issue / Pull Request / etc.

These are set explicitly in this example, however, in my usual build process I have been using: [babel-plugin-transform-define](https://github.com/FormidableLabs/babel-plugin-transform-define):

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

FYI: Technically your API Keys are not in your Repo, however, they will still absolutely be in your end build javascript.

## 🙌 Props
Super props to the React, Instafeed, and Instagram teams️.

## ❤️ "Legal"
This software is provided as-is, and all that usually lovely stuff.
