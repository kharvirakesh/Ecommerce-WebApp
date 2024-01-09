import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Collections } from "@/interfaces/collections.interface";
import { collectionProducts } from "../../mockData/product";

const index = () => {
  const wishlistedItems = collectionProducts.filter((item: any) => {
    return item.isWishlisted;
  });

  const renderWishlist = (product: Collections[]) => {
    let array = [];
    for (let i = 0; i < product.length; i++) {
      array.push(
        <Col span={12}>
          <div
            style={{
              height: "175px",
              backgroundColor: "#D9D9D9",
              borderRadius: "8px",
              padding: "4px",
              fontFamily: "Roboto, sans-serif",
              display: "flex", // Ensuring the container uses flex display
            }}
          >
            <div style={{ flex: "0 0 33%", padding: "8px" }}>
              <div
                style={{
                  backgroundColor: "#C7BABA",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                }}
              >
                img
              </div>
            </div>
            <div style={{ flex: "1", padding: "8px" }}>
              {" "}
              <div
                style={{
                  height: "22%",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                <span>{product[i]?.productTitle ?? ''}</span>
              </div>
              <div
                style={{
                  height: "38%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product[i]?.productDescription ?? ''}
              </div>
              <div
                style={{
                  height: "40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#384861",
                    color: "white",
                    borderRadius: "8px",
                    padding: "6px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      padding: "6px",
                      fontSize: "large",
                    }}
                  >
                    &#8377; {product[i]?.price}
                  </span>{" "}
                </div>
                <div
                  style={{
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "8px",
                    }}
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 34 35'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.91699 30.625C9.13783 30.625 8.47105 30.3397 7.91666 29.769C7.36227 29.1983 7.0846 28.5114 7.08366 27.7083V8.75H5.66699V5.83333H12.7503V4.375H21.2503V5.83333H28.3337V8.75H26.917V27.7083C26.917 28.5104 26.6398 29.1973 26.0854 29.769C25.531 30.3406 24.8638 30.626 24.0837 30.625H9.91699ZM24.0837 8.75H9.91699V27.7083H24.0837V8.75ZM12.7503 24.7917H15.5837V11.6667H12.7503V24.7917ZM18.417 24.7917H21.2503V11.6667H18.417V24.7917Z'
                        fill='#424242'
                      />
                    </svg>
                  </button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#658E98",
                      padding: "6px",
                      borderRadius: "8px",
                      transition: "box-shadow 0.2s ease",
                      boxShadow: "0px 0px 12px rgba(0, 0, 0, 0)",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      const target = e.target as HTMLDivElement;
                      if (target) {
                        target.style.boxShadow = "0px 0px 12px rgba(0, 0, 0, 0.3)";
                      }
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      const target = e.target as HTMLDivElement;
                      if (target) {
                        target.style.boxShadow = "0px 0px 12px rgba(0, 0, 0, 0)";
                      }
                    }}
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          marginRight: "4px",
                          fontWeight: "400",
                          fontFamily: "Roboto",
                        }}
                      >
                        Add to cart
                      </span>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17 18C17.5304 18 18.0391 18.2107 18.4142 18.5858C18.7893 18.9609 19 19.4696 19 20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22C16.4696 22 15.9609 21.7893 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20C15 18.89 15.89 18 17 18ZM1 2H4.27L5.21 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75C7.17 14.8163 7.19634 14.8799 7.24322 14.9268C7.29011 14.9737 7.3537 15 7.42 15H19V17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2ZM7 18C7.53043 18 8.03914 18.2107 8.41421 18.5858C8.78929 18.9609 9 19.4696 9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20C5 18.89 5.89 18 7 18ZM16 11L18.78 6H6.14L8.5 11H16Z'
                          fill='#424242'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      );
    }
    return array;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "maxContent",
      }}
    >
      <div
        style={{
          background: "#558891",
          width: "80%",
          padding: 24,
          borderRadius: "10px",
          height: "80%",
        }}
      >
        <Row gutter={[16, 16]}>{renderWishlist(wishlistedItems)}</Row>
      </div>
    </div>
  );
};

export default index;
