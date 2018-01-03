import React, { Component } from 'react'
import invariant from 'invariant'
import instafeed from 'instafeed-lite'

// export default class ReactInstafeed extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       items: props.items || []
//     }
//   }
//   componentDidMount() {
//     instafeed({ ...this.props }).then(data =>
//       this.setState({ items: data.data })
//     )
//   }
//   render() {
//     const { items } = this.state
//     console.log('.................')
//     console.dir(items)
//     return <h1>Okay, now actually wrap it.</h1>
//   }
// }
export default WrappedComponent => {
  invariant(
    typeof WrappedComponent === 'function' ||
      typeof WrappedComponent === 'object',
    `You must pass a component to the function returned by ` +
      `index. Instead received ${JSON.stringify(WrappedComponent)}`
  )

  return class InstafeedComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        items: props.items || []
      }
    }
    componentDidMount() {
      instafeed({ ...this.props }).then(data =>
        this.setState({ items: data.data })
      )
    }
    render() {
      // const data = instafeed({ ...this.props })
      return <WrappedComponent {...this.state.items} />
    }
  }
}
