import '@pages'
import '@rex/ga'
import '@rex/gtag'
import '@rex/gtm'
import '@rex/hotjar'
import '@rex/trackjs'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.requestIdleCallback(() =>
      navigator
        .serviceWorker
        .register('/sw.js')
        .then(registration => console.log('SW registered: ', registration))
        .catch(registrationError => console.log('SW registration failed: ', registrationError))
    )
  }
}
