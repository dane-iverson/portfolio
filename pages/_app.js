import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-4JBDGP7XT1", {
        page_path: url,
      });
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4JBDGP7XT1"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4JBDGP7XT1');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
