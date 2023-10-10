import React from "react";

<<<<<<< HEAD
interface IFooterProps {}

export const Footer = ({}: IFooterProps) => {
=======
interface IFooterProps {
  property1: any; // replace any with profer datatype
  property2: any; // replace any with profer datatype
}

export const Footer = ({ property1, property2 }: IFooterProps) => {
>>>>>>> fb469fdae1964ad3cd8e7e192c2c53b85f85ad2d
  return <div>Footer</div>;
};
