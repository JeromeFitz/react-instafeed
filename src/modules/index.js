/* eslint-disable no-console */
// import React, { Component } from 'react'
import invariant from 'invariant'

// import genKey from './genKey'
import run from './run'

export default params => {
  // console.log('index > params...')
  // console.dir(params)
  let option,
    // unique,
    value = null

  // default options
  const defaults = {
    get: 'popular',
    resolution: 'thumbnail',
    sortBy: 'none'
  }

  invariant(
    typeof params === 'object',
    'You must pass an Object of options to the react-instafeed function'
  )

  // override default options
  for (option in params) {
    value = params[option]
    defaults[option] = value
  }

  // console.log('index > defaults...')
  // console.dir(defaults)

  // unique = genKey()
  // const data = run(defaults, unique, this)
  const data = run(defaults, this)

  // console.log('index > unique...')
  // console.dir(unique)

  // console.log('index > data...')
  // console.dir(data)

  return data
  // return WrappedComponent => {
  //   invariant(
  //     typeof WrappedComponent === 'function' ||
  //       typeof WrappedComponent === 'object',
  //     `You must pass a component to the function returned by ` +
  //       `index. Instead received ${JSON.stringify(WrappedComponent)}`
  //   )
  //
  //   // eslint-disable-next-line react/display-name
  //   return class extends Component {
  //     render() {
  //       console.log('... Component')
  //       return <WrappedComponent {...data} />
  //     }
  //   }
  // }
}
