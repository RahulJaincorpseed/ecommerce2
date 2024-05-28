import React from "react";
import ProductContainer from "../components/ProductContainer";
import BigHeading from "../components/BigHeading";
import SectionSep from "../components/SectionSep";
import ProductCard from "../components/ProductCard";
import { productData } from "../data/productData";
import LoadButton from "../components/LoadButton";

const Latestproduct = ({children}) => {
  return (
    <SectionSep>
      <BigHeading data="Latest Product" />
      <ProductContainer>
       {children}
        {productData.map((pro, index) => (
          <ProductCard pro={pro}  />
        ))}
      </ProductContainer>
      
      <LoadButton />
    </SectionSep>
  );
};

export default Latestproduct;
