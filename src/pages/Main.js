import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from '../assets/logo1.png'
import Product from "./components/Ptoduct";
import {product1, product2} from "../const";

const Main = () => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    return (
        <div className="flex flex-col justify-center items-center px-4 pt-10 w-full">
            <div className="flex flex-col justify-center items-center px-4 w-full">
                <h1 className="text-4xl text-orange-500 tracking-wide">coming soon..</h1>
                <img src={Logo} className="sm:max-w-sm max-w-full rounded-lg py-10" />
                <div className={"flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-x-10 sm:space-y-0 w-full"}>
                    <Product
                        url={product1}
                    ></Product>
                    <Product
                        url={product2}
                    ></Product>
                </div>
                <p className="tracking-wide py-10">for wholesale text us on <a href="https://t.me/nat1515" className="inline underline decoration-sky-700 decoration-2 underline-offset-2 after:content-['_↗'] text-sky-700" target="_blank"><span className="inline">telegram</span></a></p>
            </div>
        </div>
    );
}

export default Main;
