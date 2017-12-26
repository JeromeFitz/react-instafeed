/* eslint-disable no-console */
import buildUrl from './buildUrl'
import getData from './getData'

// export default function run(options, unique, context) {
export default function run(options, context) {
  let url = null,
    data = {}

  // console.log('run > options...')
  // console.dir(options)
  // console.log('run > unique...')
  // console.dir(unique)
  // console.log('run > context...')
  // console.dir(context)

  if (typeof options.accessToken !== 'string' && !options.url) {
    throw new Error('Missing accessToken.')
  }

  if (options.before != null && typeof options.before === 'function') {
    options.before.call(context)
  }

  if (typeof document !== 'undefined' && document !== null) {
    // url = options.url || buildUrl(options, unique)
    url = options.url || buildUrl(options)
    // console.log('run > url...')
    // console.dir(url)
    data = getData(url)
  }

  // console.log('run > data...')
  // console.dir(data)
  return data
}
