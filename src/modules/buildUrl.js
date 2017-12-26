/* eslint-disable no-console */
// export default function buildUrl(options, unique) {
export default function buildUrl(options) {
  let base, endpoint, final

  // console.log('buildUrl > options')
  // console.dir(options)
  // console.log('buildUrl > unique')
  // console.dir(unique)

  base = 'https://api.instagram.com/v1'

  switch (options.get) {
    case 'popular':
      endpoint = 'media/popular'
      break
    case 'tagged':
      if (!options.tagName) {
        throw new Error("No tag name specified. Use the 'tagName' option.")
      }
      endpoint = `tags/${options.tagName}/media/recent`
      break
    case 'location':
      if (!options.locationId) {
        throw new Error("No location specified. Use the 'locationId' option.")
      }
      endpoint = `locations/${options.locationId}/media/recent`
      break
    case 'user':
      if (!options.userId) {
        throw new Error("No user specified. Use the 'userId' option.")
      }
      endpoint = `users/${options.userId}/media/recent`
      break
    default:
      throw new Error(`Invalid option for get: ${options.get}.`)
  }

  final = `${base}/${endpoint}`

  if (options.accessToken != null) {
    final += `?access_token=${options.accessToken}`
  } else {
    final += `?client_id=${options.clientId}`
  }

  if (options.limit != null) {
    final += `&count=${options.limit}`
  }

  // Remove this for now.
  // final += `&callback=instafeedCache${unique}.parse`

  // console.log('buildUrl > final')
  // console.dir(final)

  return final
}
