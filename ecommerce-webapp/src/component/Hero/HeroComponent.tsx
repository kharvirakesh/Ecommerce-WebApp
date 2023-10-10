import React from "react";

interface IHeroComponentProps {
  property1: any; // replace any with profer datatype
  property2: any; // replace any with profer datatype
}

export const HeroComponent = ({
  property1,
  property2,
}: IHeroComponentProps) => {
  return <div>HeroComponent</div>;
};
