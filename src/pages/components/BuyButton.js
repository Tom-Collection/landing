import React from "react";
import {Link} from "react-router-dom";
import {items, stores} from "../../const";
import ShortUniqueId from "short-unique-id";

const BuyButton = ({ itemCode }) => {

    const uid = new ShortUniqueId({ length: 10 });
    const isSoon = items.soon.includes(itemCode)

    return (
        <>
            {isSoon ? (
                <div className={`w-full text-[#eb8340] text-2xl text-center`}>cкоро в продаже</div>
            ) : (
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#eb8340] m-1">Купить</div>
                    <div className="dropdown dropdown-end pt-4" data-theme="light">
                        {!isSoon && (
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 !border-2 !border-black">
                                {stores.activeStores.map(activeStore => {
                                    const title = stores[activeStore].title
                                    const url = stores[activeStore]?.items[`${itemCode}Url`]

                                    return url ? (
                                        <li key={uid.rnd()}>
                                            <Link to={url} target={"_blank"}>{title}</Link>
                                        </li>
                                    ) : null
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            )}
        </>

    )
}

export default BuyButton;