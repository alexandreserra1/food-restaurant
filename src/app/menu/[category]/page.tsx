import React from "react";
import { pizzas } from "@/data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  return (
    <div className=" text-red-500 flex flex-wrap">
      {pizzas.map((item) => (
        <Link className="even:bg-fuchsia-50 group flex flex-col justify-between p-4 w-full h-[60vh] border border-red-500 sm:w-1/2 lg:w-1/3"
         href={`/product/${item.id}`}
          key={item.id}>
          {/*IMAGE CONTAINER */}
          {item.img && (
            <div className=" relative h-[80%]">
              <Image src={item.img} alt="" fill className=" object-contain"/>
            </div>
          )}
          {/*text CONTAINER */}
          <div className=" flex items-center justify-between font-bold">
            <h1 className=" text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">{item.price}</h2>
            <button className="group-hover:block hidden uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
