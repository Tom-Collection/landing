import React from "react";
import Logo from '../assets/logo1.png'
import Product from "./components/Ptoduct";
import {items} from "../const";
import ShortUniqueId from "short-unique-id";

const Main = () => {

    const uid = new ShortUniqueId({ length: 10 });

    return (
        <div className="flex flex-col justify-center items-center px-4 pt-10 w-full">
            <div className="flex flex-col justify-center items-center px-4 w-full">
                <img src={Logo} className="sm:max-w-sm max-w-full rounded-lg py-10" />
                <div className={"w-full grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 auto-rows-fr"}>
                    {items.activeItems.map(activeItem=>{
                        return (
                            <Product
                                key={uid.rnd()}
                                imageUrl={items[activeItem].imageUrl}
                                title={items[activeItem].title}
                                description={items[activeItem].description}
                                itemCode={activeItem}
                            ></Product>
                        )
                    })}
                </div>
                <p className="tracking-wide py-10">for wholesale text us on <a href="https://t.me/nat1515" className="inline underline decoration-sky-700 decoration-2 underline-offset-2 after:content-['_↗'] text-sky-700" target="_blank"><span className="inline">telegram</span></a></p>
            </div>
        </div>
    );
}

export default Main;
