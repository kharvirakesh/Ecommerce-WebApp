
import React from "react";
import Head from "next/head";
import { BreadCrumb } from "@/component/Common/BreadCrumb/BreadCrumb";
import styles from '../../styles/product.module.css';

export default function Product() {
  const pageName = 'product';
  return (
    <div>
      <Head>
        <title>{pageName.charAt(0).toUpperCase() + pageName.slice(1) ?? ''} Page</title>
        <meta name="description" content="New description for your product page" />
        <meta name="keywords" content="product, features, description, keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <BreadCrumb currentPage={pageName ?? ''} />
      </div>
    </div>
  );
};


