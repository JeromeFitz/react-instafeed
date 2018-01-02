import React, { Component } from 'react'
import invariant from 'invariant'
import { instafeed } from 'react-instafeed'

export default WrappedComponent => {
  invariant(
    typeof WrappedComponent === 'function' ||
      typeof WrappedComponent === 'object',
    `You must pass a component to the function returned by ` +
      `index. Instead received ${JSON.stringify(WrappedComponent)}`
  )

  return class extends Component {
    render(params) {
      const data = instafeed({ ...params })
      return <WrappedComponent {...data} />
    }
  }
}
