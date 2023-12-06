import React, { useEffect, useState } from "react";
import styles from "../../styles/modal.module.css";
import { useRouter } from "next/router";
import { Form, Input, Button } from "antd";
import type { FormItemProps } from "antd";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

interface IModalProps {
  onClose: () => void;
}

export const Modal = ({ onClose }: IModalProps) => {
  const router = useRouter();

  const closeModal = (e: any) => {
    if (e.target.id == "wrapper") {
      onClose();
    }
  };

  const onFinish = (value: object) => {
    console.log(value);
  };

  return (
    <div id="wrapper" className={styles.wrapper} onClick={closeModal}>
      <div className={styles.container}>
        <button className={styles.closeModal} onClick={onClose}>
          X
        </button>
        <div className={styles.modal}>
          <div
            style={{
              position: "relative",
              top: "15%",
              textAlign: "center",
              fontSize: "large",
            }}
          >
            Sign Up
          </div>
          <div className={styles.signupForm}>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <MyFormItem
                    style={{ marginBottom: "0px" }}
                    name="firstName"
                    label={
                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: "roboto",
                          color: "white",
                          marginBottom: "0px",
                          paddingBottom: "0px !important",
                        }}
                      >
                        Username
                      </p>
                    }
                  >
                    <Input style={{ borderRadius: "2px" }} />
                  </MyFormItem>
                  <MyFormItem
                    name="Password"
                    label={
                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: "roboto",
                          color: "white",
                          marginBottom: "0px",
                        }}
                      >
                        Password
                      </p>
                    }
                  >
                    <Input type="password" style={{ borderRadius: "2px" }} />
                  </MyFormItem>
                </MyFormItemGroup>
              </MyFormItemGroup>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.formSubmit}
                >
                  SIGNUP
                </Button>
              </div>
            </Form>
          </div>
          <div className={styles.vectors}>
            <div style={{ position: "absolute" }}>
              <svg
                width="100%"
                height="92"
                viewBox="0 0 678 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M62.3368 31.0584C33.1996 38.0861 0.933884 73.7267 0 91.296H86.1508L466.475 83.1388L653.485 65.5695L677.3 14.7441C659.089 36.4965 598.573 75.7345 507.8 23.5287C427.952 -22.3932 351.274 11.6066 327.793 31.6858C312.384 44.8628 234.919 93.1783 182.808 65.5695C117.669 31.0584 98.7583 22.2737 62.3368 31.0584Z"
                  fill="url(#paint0_linear_61_264)"
                  fill-opacity="0.4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_61_264"
                    x1="338.65"
                    y1="0.623535"
                    x2="338.65"
                    y2="91.296"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#353535" />
                    <stop offset="1" stop-color="#9C9C9C" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div style={{ position: "absolute" }}>
              <svg
                width="100%"
                height="92"
                viewBox="0 0 669 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M132.483 35.4509C46.4918 10.2855 16.2148 64.5238 0.805664 88.7861L33.7251 91.9235L423.155 89.4136L648.688 83.1388C657.326 72.0534 663.072 28.118 668.299 4.70461C669.7 -1.57014 612.9 80.307 525.415 19.1365C439.264 -41.1009 437.163 66.1971 288.676 16.6266C210.012 -9.63398 218.475 60.6162 132.483 35.4509Z"
                  fill="url(#paint0_linear_61_266)"
                  fill-opacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_61_266"
                    x1="342.917"
                    y1="4.6412"
                    x2="342.917"
                    y2="98.1983"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#363636" />
                    <stop offset="1" stop-color="#D2D9DC" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div style={{ position: "absolute" }}>
              <svg
                width="100%"
                height="89"
                viewBox="0 0 678 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M133.779 37.7254C78.195 10.9757 20.7789 56.7588 0 79.7662C0 79.7662 4.90289 88.5508 13.3079 88.5508C21.2011 88.5508 594.182 89.5616 664.692 88.5508C675.198 87.9234 678 79.7662 678 79.1387V0.704468C662.824 27.0584 598.231 85.7383 526.711 46.5101C423.75 -9.96259 362.814 23.812 326.393 46.5101C278.064 76.6287 218.529 78.5113 133.779 37.7254Z"
                  fill="url(#paint0_linear_61_265)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_61_265"
                    x1="661.19"
                    y1="54.0399"
                    x2="12.6818"
                    y2="69.6747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#151515" />
                    <stop offset="1" stop-color="#5E5E5E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
