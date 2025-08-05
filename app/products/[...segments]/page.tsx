import React from "react";
interface Props {
  params: { segments: string[] };
}
const ProductsSpecs = ({ params: { segments } }: Props) => {
  return <div>products specs {segments.join(" ")}</div>;
};

export default ProductsSpecs;
