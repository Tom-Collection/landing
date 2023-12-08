import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Product = ({ url }) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to load image');
                }

                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);

                setImageSrc(imageUrl);
                setImageLoaded(true);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        fetchImage();
    }, [url]);

    return (
        <div className="card w-full sm:w-80 bg-white shadow-xl">
            {imageLoaded ? (
                <>
                    <figure><img src={url} alt="Bundle" /></figure>
                    <div className="card-body bg-white pt-0">
                        <h2 className="card-title bg-white">Drip Coffee Bundle - 6x11</h2>
                        <p>Coffee in drip packs, 100% arabica, pack of 6 drip packs of 11 grams each</p>
                        <div className="card-actions justify-end bg-white">
                            <Link
                                className="btn btn-primary"
                                to={"https://market.yandex.ru/product--kofe-v-drip-paketakh-drip-coffee-bundle-100-arabika-upakovka-iz-6-drip-paketov-po-11-gramm/35884892?clid=2331511&distr_type=7&mclid=1002&pp=902&hid=16044466&src_pof=2331511&utm_source_service=market_widgets&do-waremd5=AEDU8hSzVBGc2WV9bKlGlw&sku=102560098479&cpc=u6BxonDHgXEQvBtX8hn3TOqf9CMCGxbQV5rsLEYHko3eJUSRxFabq3ylE00x8Lgz7cdqcqsyYFJCvtACzmgfAzgkp-j8f5PZXnWPydLGj6qXosWoGX9KITrEDzHQR6jlhyHXhibaG53WB0LxL5Wnumv50ekC25f_TVD5y1MkVvdKxABk81W_m3a5cWOuaCuluApoVd640Vg%2C&sponsored=1&cc=Ci4xNzAyMDM4MDMwNjQ3LzhlNzk1NmVjY2Q2OGU1Njc5NWZmMzU5Y2ZlMGIwNjAwEIYHgH3m7QY%2C&utm_term=background&utm_content=offers-2&utm_campaign=2331511&utm_source=partner_network&utm_medium=widget"}
                            >
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className={"p-3 space-y-3 bg-white"}>
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            )}

        </div>
    );
}

export default Product;