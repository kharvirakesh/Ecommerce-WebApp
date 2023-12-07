import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from "../../styles/hero.module.css";
import { carouselProducts } from '../../mockData/product';
import { Product } from '@/interfaces/carousel.interface';
import Link from 'next/link'

interface ICarouselProps { }

export const Carousel = ({ }: ICarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Function to update title and subtitle when the slider changes
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  settings.beforeChange = handleBeforeChange;

  const currentProduct: Product = carouselProducts[currentSlide];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile ?
        <div className={styles.container}>
          <Row>
            <Col span={12}>
              <span className={styles.title}>
                {currentProduct?.productTitle ?? ''}
              </span>
              <br />
              <span className={styles.subTitle}>
                Choose Luxury, <span style={{ color: '#1C1415' }}>Choose Us</span>
              </span>
              <div className={styles.description}>{currentProduct?.productDescription ?? ''}</div>
              <span className={styles.pricing}>${currentProduct?.price.toFixed(2) ?? ''}</span>
            </Col>
            <Col span={12}>
              <Slider {...settings}>
                {carouselProducts?.map((cval: Product, ind: number) => (
                  <Link href={`/product`} key={cval.id}>
                    <Image width={500} height={500} src={cval.productImage ?? ''} alt={cval.productTitle ?? ''} />
                  </Link>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
        :
        <div className={styles.mobileContainer}>
          <Col span={24}>
            <span className={styles.title}>
              {currentProduct?.productTitle ?? ''}
            </span>
            <br />
            <span className={styles.subTitle}>
              Choose Luxury, <span style={{ color: '#1C1415' }}>Choose Us</span>
            </span>
            <div className={styles.description}>{currentProduct?.productDescription ?? ''}</div>
            <span className={styles.pricing}>${currentProduct?.price.toFixed(2) ?? ''}</span>
          </Col>
          <Col>
            <Slider {...settings}>
              {carouselProducts?.map((cval: Product, ind: number) => (
                <Image key={cval.id} width={300} height={300} src={cval.productImage ?? ''} alt={cval.productTitle} />
              ))}
            </Slider>
          </Col>
        </div>
      }
    </>
  );
};

