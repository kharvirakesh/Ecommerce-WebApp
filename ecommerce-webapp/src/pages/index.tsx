import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import { HeroComponent } from "@/component/Hero/HeroComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <HeroComponent property1={undefined} property2={undefined} /> */}
      </div>
    </>
  );
}
