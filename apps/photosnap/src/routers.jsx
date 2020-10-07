import h, { render } from '@rex/h'
import router from '@rex/router'
import '@rex/reset'

// router(/^\/$/, async () => {
//   const { default: Home } = await import('@home' /* webpackPrefetch: true, webpackPreload: 1, webpackChunkName: "home" */)
//   render(document.body, <Home />)
// })

router(/^\/features$/, async () => {
  const { default: Features } = await import('@features' /* webpackPrefetch: true, webpackPreload: 2, webpackChunkName: "features" */)
  render(document.body, <Features />)
})

router(/^\/pricing$/, async () => {
  const { default: Pricing } = await import('@pricing' /* webpackPrefetch: true, webpackPreload: 3, webpackChunkName: "pricing" */)
  render(document.body, <Pricing />)
})

router(/^\/stories$/, async () => {
  const { default: Stories } = await import('@stories' /* webpackPrefetch: true, webpackPreload: 4, webpackChunkName: "stories" */)
  render(document.body, <Stories />)
})

/* TODO: Esta rota é usado para identificar os users agents */
router(/^\/$/, () => render(document.body, <dfn style='font-size: 24px; line-height: 1.5;'>{navigator.userAgent}</dfn>))
