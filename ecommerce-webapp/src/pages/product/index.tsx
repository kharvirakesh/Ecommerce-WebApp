import React from "react";
import Head from "next/head";
import { BreadCrumb } from "@/component/Common/BreadCrumb/BreadCrumb";
import styles from '../../styles/product.module.css';
import { Col, Row } from "antd";

const Product = () => {
  const pageName = 'product';
  const pageTitle = `${pageName.charAt(0).toUpperCase()}${pageName.slice(1) ?? ''} Page`;

  const renderProductItems = (count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        <Col key={i} span={6} style={{ height: '225px' }}>
          <div style={{ margin: '20px', height: '80%', background: '#d9d9d9', borderRadius: '10px', textAlign: 'center', }}>
            {/* Product Item {i + 1} */}
          </div>
        </Col>
      );
    }
    return items;
  };

  return (
    <div>
      <Head>
        <title>{pageTitle} </title>
        <meta name="description" content="New description for your product page" />
        <meta name="keywords" content="product, features, description, keywords" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <BreadCrumb currentPage={pageName ?? ''} />

        <Row style={{ marginTop: '20px' }}>
          <Col span={18} push={6} style={{ borderRadius: '8px', height: 'auto', background: '#598892' }}>
            <Row gutter={[20, 20]}>
              {renderProductItems(12)}
            </Row>
          </Col>
          <Col span={5} pull={18} style={{ borderRadius: '8px', height: 'auto', background: '#598892' }}>
            {/* Filters */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
