import React from "react";
import ProductContainer from "../components/ProductContainer";
import BigHeading from "../components/BigHeading";
import SectionSep from "../components/SectionSep";
import ProductCard from "../components/ProductCard";
import { productData } from "../data/productData";

const Latestproduct = () => {
  return (
    <SectionSep>
      <BigHeading data="Latest Product" />
      <ProductContainer>
        {productData.map((pro, index) => (
          <ProductCard pro={pro}  />
        ))}
      </ProductContainer>
    </SectionSep>
  );
};

export default Latestproduct;
