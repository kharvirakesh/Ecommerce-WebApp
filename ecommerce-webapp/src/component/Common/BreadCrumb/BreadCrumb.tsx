import React from "react";
import { Breadcrumb } from 'antd';
import { generateBreadcrumbs } from "@/constants";

interface IBreadCrumbProps {
  currentPage: string;
}

export const BreadCrumb = ({ currentPage }: IBreadCrumbProps) => {
  const breadcrumbs = generateBreadcrumbs(currentPage);

  return (
    <div>
      <Breadcrumb>
        {Array.isArray(breadcrumbs) && breadcrumbs?.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item.link ? (
              <a href={item.link}>{item.title ?? ''}</a>
            ) : (
              <span>
                {item.title ?? ''}</span>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};
