import React, { useState } from "react";
import Head from "next/head";
import { BreadCrumb } from "@/component/Common/BreadCrumb/BreadCrumb";
import styles from '../../styles/product.module.css';
import { Col, Row, Button, message } from "antd";
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';
import { options } from "../../constants";
import { IProduct } from "../../interfaces/carousel.interface";
import { carouselProducts } from "../../mockData/product";

const Product = () => {
  const pageName = 'product-description';
  const pageTitle = `${pageName.charAt(0).toUpperCase()}${pageName.slice(1) ?? ''} Page`;
  const [messageApi, contextHolder] = message.useMessage();
  const condition = 'error';
  const messageContent = 'Please select a size';

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [value, setValue] = useState<string>('');
  const [addWishList, setWishList] = useState<boolean>(false);

  const handleSelectSize = (value: string) => {
    setValue(value);
  };

  const handleWishList = () => {
    setWishList(!addWishList)
  };

  const handleBuyNow = () => {
    if (!value) {
      messageApi.open({
        type: condition,
        content: messageContent,
      })
    };
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
        <Row>
          <Col span={12} style={{ padding: '80px' }}>
            <Slider {...settings}>
              {carouselProducts?.map((cval: IProduct, ind: number) => (
                <Image key={cval.id} width={400} height={400} src={cval.productImage ?? ''} alt={cval.productTitle ?? ''} />
              ))}
            </Slider>
          </Col>
          <Col span={12} style={{ padding: '80px 20px', }}>
            <span className={styles.productTitle}>
              CASIO
            </span>
            <br />
            <span className={styles.productDescription}>
              Casio Edifice Men Black Analogue watch EX393 EFR-559BGL-1AVUDF
            </span>
            <br />
            <div style={{ border: '1px solid #000000', margin: '10px 0px' }}></div>
            <span className={styles.discoutPrice}>
              ₹ 10795</span> <span className={styles.actualPrice}>MRP ₹11995 (10% OFF)
            </span>
            <br />
            <span className={styles.tax}>
              inclusive of all taxes
            </span>
            <br />
            <p className={styles.selectSize}>
              Select Size
            </p>
            <div className={styles.sizeContainer}>
              {options?.slice(0, 3)?.map((cval, id) => {
                return <Button
                  key={id}
                  className={`${styles.sizeButton} ${value === cval.value ? styles.selectedSize : ''}`}
                  onClick={() => handleSelectSize(cval.value)}
                >
                  {cval.label}
                </Button>
              })}
            </div>
            {contextHolder}
            <div>
              <Button
                className={styles.buyNow}
                onClick={handleBuyNow}
              >
                BUY NOW
              </Button>
              <Button
                className={styles.wishList}
                icon={addWishList ? <HeartTwoTone twoToneColor="#eb2f96" /> : <HeartOutlined />}
                onClick={handleWishList}
              >
                WISHLIST
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
};

export default Product;