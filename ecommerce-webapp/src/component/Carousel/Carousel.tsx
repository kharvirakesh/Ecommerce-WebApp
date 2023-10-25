import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from "../../styles/Hero.module.css";
import { carouselProducts } from '../../mockData/product';
import { Product } from '@/interfaces/carousel.interface';

interface ICarouselProps {
  property1: any;
  property2: any;
}

export const Carousel = ({
  property1,
  property2,
}: ICarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to update title and subtitle when the slider changes
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  settings.beforeChange = handleBeforeChange;

  const currentProduct: Product = carouselProducts[currentSlide];

  return (
    <div className={styles.container}>
      <Row>
        <Col span={12}>
          <span className={styles.title}>{currentProduct.productTitle}</span>
          <br />
          <span className={styles.subTitle}>
            Choose Luxury, <span style={{ color: '#1C1415' }}>Choose Us</span>
          </span>
          <br />
          <br />
          <br />
          <div className={styles.description}>{currentProduct.productDescription}</div>
          <br />
          <br />
          <br />
          <span className={styles.pricing}>${currentProduct.price.toFixed(2)}</span>
        </Col>

        <Col span={12}>
          <Slider {...settings}>
            {carouselProducts.map((cval: Product, ind: number) => (
              <div key={cval.id}>
                <Image src={cval.productImage} width={500} height={500} alt={cval.productTitle} />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

