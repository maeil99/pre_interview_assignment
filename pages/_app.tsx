import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-black bg-white min-h-screen">
        <Layout>
          <div className="py-20">
            <Component {...pageProps} />
          </div>
        </Layout>
      </div>
      <Script
        src="https://kit.fontawesome.com/04aa5e1825.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  );
}

export default MyApp;
