import React from "react";

interface IBoilerPlateComponentProps {
    property1: any;
    property2: any;
}

export const BoilerPlateComponent = ({
    property1,
    property2,
}: IBoilerPlateComponentProps) => {
    return <div>BoilerPlateComponent</div>;
};
