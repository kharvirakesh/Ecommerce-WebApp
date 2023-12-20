import React from "react";
import { Col, Row } from "antd";

const index = () => {
  const renderWishlist = (n: number) => {
    let array1 = [];
    for (let i = 0; i < n; i++) {
      array1.push(
        <Col span={12}>
          <div
            style={{
              height: "175px",
              backgroundColor: "#D9D9D9",
              borderRadius: "8px",
              padding: "4px",
            }}
          >
            <Row style={{ height: "100%" }}>
              <Col
                span={6}
                style={{
                  height: "100%",
                  padding: "8px",
                }}
              >
                <div style={{ backgroundColor: "#C7BABA", height: "100%" }}>
                  img
                </div>
              </Col>
              <Col
                span={16}
                style={{
                  height: "100%",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    height: "22%",
                    backgroundColor: "#C79B9B",
                  }}
                >
                  Big Title{" "}
                </div>
                <div
                  style={{
                    height: "38%",
                    backgroundColor: "#D5A5A5",
                  }}
                >
                  Long description{" "}
                </div>
                <div
                  style={{
                    height: "40%",
                    backgroundColor: "#E28888",
                  }}
                >
                  price container
                </div>
              </Col>
              <Col
                span={2}
                style={{
                  height: "100%",
                }}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width='34'
                    height='35'
                    viewBox='0 0 34 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.91699 30.625C9.13783 30.625 8.47105 30.3397 7.91666 29.769C7.36227 29.1983 7.0846 28.5114 7.08366 27.7083V8.75H5.66699V5.83333H12.7503V4.375H21.2503V5.83333H28.3337V8.75H26.917V27.7083C26.917 28.5104 26.6398 29.1973 26.0854 29.769C25.531 30.3406 24.8638 30.626 24.0837 30.625H9.91699ZM24.0837 8.75H9.91699V27.7083H24.0837V8.75ZM12.7503 24.7917H15.5837V11.6667H12.7503V24.7917ZM18.417 24.7917H21.2503V11.6667H18.417V24.7917Z'
                      fill='#8F9191'
                    />
                  </svg>
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      );
    }
    return array1;
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
          // overflow: "scroll",
        }}
      >
        <Row gutter={[16, 16]}>{renderWishlist(7)}</Row>
      </div>
    </div>
  );
};

export default index;
