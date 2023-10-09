import React from "react";

interface IBoilerPlateComponentProps {
  property1: any; // replace any with profer datatype
  property2: any; // replace any with profer datatype
}

export const BoilerPlateComponent = ({
  property1,
  property2,
}: IBoilerPlateComponentProps) => {
  return <div>BoilerPlateComponent</div>;
};
