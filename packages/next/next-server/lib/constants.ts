export const PHASE_EXPORT = 'phase-export'
export const PHASE_PRODUCTION_BUILD = 'phase-production-build'
export const PHASE_PRODUCTION_SERVER = 'phase-production-server'
export const PHASE_DEVELOPMENT_SERVER = 'phase-development-server'
export const PAGES_MANIFEST = 'pages-manifest.json'
export const BUILD_MANIFEST = 'build-manifest.json'
export const EXPORT_MARKER = 'export-marker.json'
export const EXPORT_DETAIL = 'export-detail.json'
export const PRERENDER_MANIFEST = 'prerender-manifest.json'
export const ROUTES_MANIFEST = 'routes-manifest.json'
export const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json'
export const SERVER_DIRECTORY = 'server'
export const SERVERLESS_DIRECTORY = 'serverless'
export const CONFIG_FILE = 'next.config.js'
export const BUILD_ID_FILE = 'BUILD_ID'
export const BLOCKED_PAGES = ['/_document', '/_app']
export const CLIENT_PUBLIC_FILES_PATH = 'public'
export const CLIENT_STATIC_FILES_PATH = 'static'
export const CLIENT_STATIC_FILES_RUNTIME = 'runtime'
export const AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__'
export const CLIENT_STATIC_FILES_RUNTIME_PATH = `${CLIENT_STATIC_FILES_PATH}/${CLIENT_STATIC_FILES_RUNTIME}`
// static/runtime/main.js
export const CLIENT_STATIC_FILES_RUNTIME_MAIN = `${CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`
// static/runtime/react-refresh.js
export const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = `${CLIENT_STATIC_FILES_RUNTIME_PATH}/react-refresh.js`
// static/runtime/amp.js
export const CLIENT_STATIC_FILES_RUNTIME_AMP = `${CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`
// static/runtime/webpack.js
export const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`
// static/runtime/polyfills.js
export const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `${CLIENT_STATIC_FILES_RUNTIME_PATH}/polyfills.js`
// matches static/<buildid>/pages/<page>.js
export const IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/
// matches static/<buildid>/pages/:page*.js
export const ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/
export const SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/
export const TEMPORARY_REDIRECT_STATUS = 307
export const PERMANENT_REDIRECT_STATUS = 308
export const STATIC_PROPS_ID = '__N_SSG'
export const SERVER_PROPS_ID = '__N_SSP'
