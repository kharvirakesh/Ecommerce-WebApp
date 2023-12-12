import React, { useEffect, useState } from "react";
import styles from "../../styles/productCard.module.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}
const { Meta } = Card;

export const ProductCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
        background: "none",
        border: "none",
      }}
      bodyStyle={{ padding: "8px" }}
    >
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <div className={styles.productImg}>
            <div className={styles.whishlist}>
              <svg
                width='30'
                height='27'
                viewBox='0 0 30 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_dd_128_215)'>
                  <path
                    d='M19.625 0C17.5742 0 15.791 0.924805 14.7422 2.47461C13.6934 0.924805 11.9102 0 9.85938 0C8.30593 0.00180919 6.81662 0.619715 5.71817 1.71817C4.61972 2.81662 4.00181 4.30593 4 5.85938C4 8.71094 5.77734 11.6787 9.2832 14.6787C10.8897 16.0476 12.625 17.2577 14.4648 18.292C14.5501 18.3378 14.6454 18.3618 14.7422 18.3618C14.839 18.3618 14.9343 18.3378 15.0195 18.292C16.8594 17.2577 18.5947 16.0476 20.2012 14.6787C23.707 11.6787 25.4844 8.71094 25.4844 5.85938C25.4826 4.30593 24.8647 2.81662 23.7662 1.71817C22.6678 0.619715 21.1784 0.00180919 19.625 0ZM14.7422 17.1006C13.1396 16.1758 5.17188 11.3008 5.17188 5.85938C5.17317 4.61657 5.66744 3.42504 6.54624 2.54624C7.42504 1.66744 8.61657 1.17317 9.85938 1.17188C11.8398 1.17188 13.5029 2.22949 14.2002 3.93262C14.2443 4.04008 14.3194 4.132 14.4159 4.19669C14.5124 4.26138 14.626 4.29592 14.7422 4.29592C14.8584 4.29592 14.9719 4.26138 15.0684 4.19669C15.1649 4.132 15.24 4.04008 15.2842 3.93262C15.9814 2.22949 17.6445 1.17188 19.625 1.17188C20.8678 1.17317 22.0593 1.66744 22.9381 2.54624C23.8169 3.42504 24.3112 4.61657 24.3125 5.85938C24.3125 11.3008 16.3447 16.1758 14.7422 17.1006Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_dd_128_215'
                    x='0'
                    y='0'
                    width='29.4844'
                    height='26.3618'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_128_215'
                    />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='effect1_dropShadow_128_215'
                      result='effect2_dropShadow_128_215'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect2_dropShadow_128_215'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.productDescription}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "8px",
            }}
          >
            <div className={styles.productDescriptionTitle}>
              Product Title - Lengthy..
            </div>
            <div className={styles.productDescriptionSubTitle}>
              Product Subtitle - lengthy..
            </div>
          </div>
          <div className={styles.productDescriptionDetails}>
            <div className={styles.descRatings}>
              <div
                style={{
                  width: "65px",
                  height: "30px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "2px" }}>4.0</span>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 11 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.63242 3.26795L3.68446 3.2604L3.70774 3.21325L5.13424 0.323246L5.13427 0.323188C5.16728 0.256202 5.21838 0.199794 5.28179 0.16035C5.34521 0.120905 5.41839 0.1 5.49307 0.1C5.56775 0.1 5.64093 0.120905 5.70435 0.16035C5.76776 0.199794 5.81886 0.256202 5.85187 0.323188L5.85189 0.323234L7.27789 3.21323L7.30116 3.26039L7.35321 3.26795L10.5432 3.73095L10.5432 3.73095C10.6132 3.74109 10.6793 3.76959 10.7346 3.81356C10.79 3.85753 10.8327 3.91539 10.8585 3.98124C10.8842 4.0471 10.892 4.11861 10.8811 4.18847C10.8704 4.25739 10.8418 4.32229 10.7982 4.37673L10.7633 4.41479L8.45333 6.66282L8.41561 6.69953L8.42451 6.75141L8.97001 9.92891L8.97002 9.92894C8.98205 9.99888 8.97526 10.0708 8.95035 10.1372C8.92544 10.2036 8.8833 10.2623 8.82826 10.307C8.77321 10.3518 8.70724 10.3812 8.63712 10.392C8.56787 10.4028 8.49703 10.3951 8.43168 10.3699L8.38681 10.3493L5.54269 8.85052L5.49612 8.82598L5.44953 8.85047L2.59653 10.3505L2.59649 10.3505C2.53376 10.3835 2.46338 10.3993 2.39255 10.3961C2.32173 10.393 2.25301 10.3711 2.19343 10.3327C2.13385 10.2943 2.08555 10.2407 2.05347 10.1775C2.02182 10.1151 2.00709 10.0455 2.01074 9.97565L2.01657 9.92632L2.56113 6.75139L2.57003 6.69953L2.53232 6.66283L0.22132 4.41333L0.221227 4.41324C0.170434 4.36392 0.133638 4.30201 0.114598 4.23383C0.0955578 4.16564 0.0949553 4.09362 0.112852 4.02513C0.130748 3.95663 0.166503 3.89412 0.216464 3.84396C0.265772 3.79446 0.327175 3.75875 0.394548 3.74036L0.445229 3.73004L3.63242 3.26795Z'
                    fill='#FFD700'
                    stroke='black'
                    stroke-width='0.2'
                  />
                </svg>
              </div>
            </div>
            <div className={styles.descPrice}>
              <div
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#658E98",
                  borderRadius: "6px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                &#8377; 400
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
