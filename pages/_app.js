import NextNProgress from "nextjs-progressbar";
import "../styles/global.css";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
