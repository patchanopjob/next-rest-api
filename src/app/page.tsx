import Card, { TProduct } from "@/components/Card/Card";
import React from "react";

type Props = {};

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

const page = async (props: Props) => {
  const data = await fetchData();

  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-8 w-fit">
      {data?.products?.map((item: TProduct, index: number) => (
        <Card key={index} product={item} />
      ))}
    </div>
  );
};

export default page;
