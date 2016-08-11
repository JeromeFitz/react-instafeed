# React, Instafeed
React implementation of [Instafeed.js](http://instafeedjs.com/)

_Instafeed.js is a dead-simple way to add Instagram photos to your website. No jQuery required, just plain 'ol javascript._

This is a wrapped for [React](https://facebook.github.io/react/)

#### Install:

```shell
npm install react-instafeed --save
```

:ghost: - This isn't an NPM Module yet

#### Usage:

```javascript
import React = require('react');
import Instafeed from 'react-instafeed'

module.exports = React.createClass({

	getInitialState() {
		return {
			instafeedLoaded: false
		}
	},
	componentDidMount() {
		this.setState({
			instafeedLoaded: true
		});
	},
	renderInstafeed() {
		let instafeed = <Instafeed
			userId='[GOES-HERE]'
			clientId='[GOES-HERE]'
			accessToken='[GOES-HERE]'
			target='instafeed'
			resolution='thumbnail'
			limit='10'
			sortBy='most-recent'
			ref='instafeed'
			customClass={this.state.instafeedLoaded ? 'loaded' : ''}
			/>;
		return instafeed;
	},
	render: function() {
		return (
			<div className="instafeed">
				{this.renderInstafeed()}
			</div>

		)
	}
})
```

You can set your variables directly in your component.

**TODO:** Allow for environment variables to populate authentication information
*This would probably remove them from the variables, and instead __if__ someone used an authentication variable it would overrwite the default which would be an ENV*

