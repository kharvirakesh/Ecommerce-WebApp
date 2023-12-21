import React from "react";
import Head from "next/head";
import { BreadCrumb } from "@/component/Common/BreadCrumb/BreadCrumb";
import styles from "../../styles/product.module.css";
import { Col, Row } from "antd";
import { ProductCard } from "@/component/ProductCard/ProductCard";
import { collectionProducts } from "../../mockData/product";
import { Collections } from "@/interfaces/collections.interface";

const Product = () => {
  const pageName = "product";
  const pageTitle = `${pageName.charAt(0).toUpperCase()}${pageName.slice(1) ?? ""
    } Page`;

  const renderProductItems = (products: Collections[]) => {
    const items = [];
    for (let i = 0; i < products?.length; i++) {
      items.push(
        <Col>
          <ProductCard product={products[i]} />
        </Col>
      );
    }
    return items;
  };

  return (
    <div>
      <Head>
        <title>{pageTitle ?? ''}</title>
        <meta
          name='description'
          content='New description for your product page'
        />
        <meta
          name='keywords'
          content='product, features, description, keywords'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <BreadCrumb currentPage={pageName ?? ""} />
        <Row style={{ marginTop: "20px" }}>
          <Col span={18} push={6}>
            <Row
              style={{
                background: "#598892",
                borderRadius: "10px",
              }}
            >
              <Row
                gutter={[12, 12]}
                justify='center'
                style={{ marginTop: "20px" }}
              >
                {renderProductItems(collectionProducts)}
              </Row>
            </Row>
          </Col>
          <Col
            span={5}
            pull={18}
            style={{
              height: "auto",
              background: "#598892",
              borderRadius: "10px",
            }}
          >
            <Col> </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
