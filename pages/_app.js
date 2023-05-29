import '@/styles/globals.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return(
    <>
     <Script 
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-S8BYM9FLXS`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S8BYM9FLXS', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} /> 
    </>
    )} 