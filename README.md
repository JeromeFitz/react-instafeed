# 🖼️ react-instafeed

[![Greenkeeper badge](https://badges.greenkeeper.io/JeromeFitz/react-instafeed.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/JeromeFitz/react-instafeed/master.svg)](https://travis-ci.org/JeromeFitz/react-instafeed)
[![NPM version](https://img.shields.io/npm/v/react-instafeed.svg)](https://www.npmjs.org/package/react-instafeed)

> A dead simple way to get data from Instagram (inspired by [Instafeed.js](https://github.com/stevenschobert/instafeed.js))

An Instagram friendly API URL and/or the data it returns. No {{templating}}.

🎁️ My suggestion is to use the `buildUrl` function with your `options` and fetch however you see fit.

😑️ If you do not want to do that, then you can use the default in this package (`isomorphic-unfetch`).

🤷️ And if you really don't want to do anything with the code, feel free to use [`react-instafeed`](https://github.com/JeromeFitz/react-instafeed) which wraps this for `react`.

## 🚨️ You do not need this. 🚨️

> ⚠️ This is a direct port from `instafeed-lite` at the moment ⚠️

If you want assistance in creating the API URL you can use `instafeed-lite`.

The templating that this had should be handled by you after you grab your data.

I do not use this repo, but I did not want to delete it as other people do.

## 🚨️ Instagram is shutting down its current API in 2020. 🚨️

Read more [here](https://developers.facebook.com/blog/post/2018/01/30/instagram-graph-api-updates/). Instagram Graph API is their new solution, which right now only is enabled for Business Accounts.

> Support for Non-Business Profiles [FUTURE]: Basic permissioning for non-business profiles will be supported in early 2019.

Currently we are still using the `v1` endpoints. (No real plan to move to Graph until Non-Business Profiles are ready.)

### 👩‍💻️ Install:

```shell
yarn add react-instafeed
```

### Render

Options:

```javascript
const options = {
  accessToken: 'access...',
  clientId: 'client...',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 123,
}
```

REACT:

```javascript
import React, { Fragment } from 'react'
import { buildUrl } from 'react-instafeed'

// 🔥️ These are in your code (not this repo)
import useAbortableFetch from '@hooks/useAbortableFetch'
import Image from '@components/Image'

const Instagram = () => {
  const { json, loading, error, abort } = useAbortableFetch(buildUrl(options))
  if (loading) return 'Loading...'
  if (error) return `Error: ${error}`
  if (!json) return null

  const { data, meta, pagination } = json

  return (
    <Fragment>
      {// eslint-disable-next-line no-unused-vars
      data &&
        data.map(({ caption, id, images, tags }, index) => {
          const image = images[options.resolution]
          return (
              <Image
                key={index}
                url={image.url}
                title={caption.text}
                caption={caption.text}
                width={image.width}
                height={image.height}
              />
            </div>
          )
        })}
    </Fragment>
  )
}
```

URL:

```javascript
import { buildUrl } from 'react-instafeed'

const instagramUrl = buildUrl(options)
```

Data:

```javascript
import instafeed from 'react-instafeed'

const data = instafeed(options)
```

### 📓️ Notes:

Again, just use `buildUrl` and handle your own loading.

#### Variables

- `limit` - Maximum number of Images to add. (**max: 60**)
- `resolution` - Size of the images to get. Available options are:
- - `low_resolution` - 320x320
- - `standard_resolution` - 640x640
- - `thumbnail` (**default**) - 150x150
- `sortBy` - Sort the images in a set order. Available options are:
- - `least-commented` - Lowest # of comments to highest.
- - `least-liked` - Lowest # likes to highest.
- - `least-recent` - Oldest to newest.
- - `most-commented` - Highest # of comments to lowest.
- - `most-liked` - Highest # of likes to lowest.
- - `most-recent` - Newest to oldest.
- - `none` (**default**) - As they come from Instagram.
- - `random` - Random order.

#### Further Documentation

- http://instafeedjs.com/
- https://github.com/stevenschobert/instafeed.js

## 🙌 Props

Super props to the Instafeed, Instagram, and React teams.

## ❤️ "Legal"

This software is provided as-is, and all that usually lovely stuff.
