import { Col, Row } from "antd";
import React from "react";
import styles from "../../styles/Hero.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watch from '../../../public/watches.svg';
import Image from 'next/image'

interface ICarouselProps {
  property1: any; // replace any with profer datatype
  property2: any; // replace any with profer datatype
}

export const Carousel = ({
  property1,
  property2,
}: ICarouselProps) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return <div className={styles.container}>
    <Row>
      <Col span={12}>
        <span className={styles.title}>Exquisite Watches</span>
        <br />
        <span className={styles.subTitle}>
          Choose Luxury, <span style={{ color: "#1C1415" }}>Choose Us</span>
        </span>
        <br />
        <br />
        <br />
        <div className={styles.description}>
          Discover the Perfect Watch for Every Occasion and Elevate Your Style
          with Timeless Elegance and Precision Craftsmanship - watch
        </div>
        <br />
        <br />
        <br />
        <span className={styles.pricing}>$430.00</span>
      </Col>

      <Col span={12}>
        <Slider {...settings}>
          <div>
            <Image
              src={watch}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src={watch}
              width={500}
              height={500}
              alt="Picture of the author"
            />          </div>
          <div>
            <Image
              src={watch}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </Slider>
      </Col>
    </Row>
  </div>;
};
