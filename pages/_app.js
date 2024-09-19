import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

const GA_TRACKING_ID = "G-4JBDGP7XT1";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);

    // Handle route changes
    const handleRouteChange = (url) => {
      gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');`}
      </Script>
      <Component {...pageProps} />

      {/* Global CSS */}
      <style jsx global>{`
        /* Global reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          height: 100%;
          width: 100%;
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        /* Optional: additional global styles */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}

export default MyApp;
