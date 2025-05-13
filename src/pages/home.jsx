import React from "react";
import Header from "../components/home/header";
import ProductFilter from "../components/home/productFilter";
import Information from "../components/home/information";
import { useEffect } from "react";
export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="flex flex-col gap-y-14">
            <Header/>
            <Information/>
            <ProductFilter/>
        </div>
    )
}