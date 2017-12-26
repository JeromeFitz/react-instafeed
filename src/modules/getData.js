/* eslint-disable no-console */
import fetch from 'isomorphic-unfetch'
import es6promise from 'es6-promise'

es6promise.polyfill()

export default async instafeedOptions => {
  // const { accessToken, userId } = instafeedOptions
  // console.log('getData > instafeedOptions...')
  // console.dir(instafeedOptions)
  // const params = `users/${userId}`
  // console.log('getData > params...')
  // console.dir(params)
  // const url = `https://api.instagram.com/v1/${params}?accessToken=${accessToken}`
  const url = instafeedOptions
  // console.log('getData > url...')
  // console.dir(url)

  try {
    let data = await fetch(url)
      .then(response => response.json())
      .catch(error => error)
    // console.log('getData > data...')
    // console.dir(data)
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
