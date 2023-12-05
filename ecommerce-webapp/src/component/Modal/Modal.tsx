import React, { useEffect, useState } from "react";
import styles from "../../styles/Modal.module.css";
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

interface IHeaderProps {}

export const Modal = ({ onClose }) => {
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
              top: "10%",
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
                        First Name
                      </p>
                    }
                  >
                    <Input style={{ borderRadius: "2px" }} />
                  </MyFormItem>
                  <MyFormItem
                    name="lastName"
                    label={
                      <p
                        style={{
                          fontSize: "10px",
                          fontFamily: "roboto",
                          color: "white",
                          marginBottom: "0px",
                        }}
                      >
                        Last Name
                      </p>
                    }
                  >
                    <Input style={{ borderRadius: "2px" }} />
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
        </div>
      </div>
    </div>
  );
};
