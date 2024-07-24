import React from "react";

type Props = {
  product: TProduct;
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  images: string[];
  thumbnail: string;
};

const Card = (props: Props) => {
  const { product } = props;

  const netPrice = React.useMemo(
    () =>
      ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2),
    []
  );

  return (
    <div className="shadow-md px-6 py-10 max-w-[300px]">
      <img src={product.thumbnail} className="w-full" alt="" />
      <div className="text-[18px] mt-6 h-[85px] flex items-end">
        {product.title}
      </div>
      <div className="text-[20px] mt-6 flex items-center">
        {product.discountPercentage ? (
          <>
            <div className="text-red-500 font-bold text-[20px]">
              ฿{netPrice}
            </div>
            <div className=" text-gray-400 text-[14px] ml-4 line-through">
              ฿{product.price}
            </div>
          </>
        ) : (
          <b>฿{product.price}</b>
        )}
        <div className="ml-2 text-gray-400 text-[14px]">/ชุด</div>
      </div>
      <svg
        fill="gray"
        height="14px"
        width="14px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 217.408 217.408"
        className="mt-10"
      >
        <path
          d="M194.078,22.682c-10.747-8.193-22.606-12.348-35.248-12.348c-15.951,0-33.181,6.808-50.126,19.754
	C91.759,17.142,74.529,10.334,58.578,10.334c-12.642,0-24.501,4.155-35.248,12.348C7.606,34.671-0.24,49.8,0.006,67.648
	c0.846,61.117,100.093,133.233,104.317,136.273l4.381,3.153l4.381-3.153c4.225-3.04,103.472-75.156,104.317-136.273
	C217.648,49.8,209.802,34.671,194.078,22.682z M153.833,149.017c-18.374,18.48-36.915,33.188-45.129,39.453
	c-8.214-6.265-26.755-20.972-45.129-39.453c-31.479-31.661-48.274-59.873-48.57-81.585c-0.178-13.013,5.521-23.749,17.421-32.822
	c8.073-6.156,16.872-9.277,26.152-9.277c17.563,0,34.338,10.936,45.317,20.11l4.809,4.018l4.809-4.018
	c10.979-9.174,27.754-20.11,45.317-20.11c9.28,0,18.079,3.121,26.152,9.277c11.9,9.073,17.599,19.809,17.421,32.822
	C202.107,89.145,185.311,117.356,153.833,149.017z"
        />
      </svg>
    </div>
  );
};

export default Card;
