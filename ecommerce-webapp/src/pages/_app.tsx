<<<<<<< HEAD
import Layout from "@/layout/Layout";
=======
import "antd/dist/antd.css";
import "../styles/antd-theme.less";
>>>>>>> fb469fdae1964ad3cd8e7e192c2c53b85f85ad2d
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
=======
  return <Component {...pageProps} />;
>>>>>>> fb469fdae1964ad3cd8e7e192c2c53b85f85ad2d
}
