import React, {useEffect, useState} from "react";
import BuyButton from "./BuyButton";

const Product = ({ imageUrl, title, description, itemCode }) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {

        if(imageUrl) {
            const fetchImage = async (url) => {
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

            fetchImage(imageUrl);
        }

    }, [imageUrl]);

    return (
        <div className="card w-full sm:w-64 min-w-full max-w-80 bg-white shadow-xl h-full">
            {imageLoaded ? (
                <>
                    <img className={"rounded-xl rounded-b-none"} src={imageSrc} alt="Bundle" />
                    <div className="card-body pt-4">
                        <h2 className="card-title bg-white">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end bg-white">
                            <BuyButton itemCode={itemCode}></BuyButton>
                        </div>
                    </div>
                </>
            ) : (
                <div className={"p-3 space-y-3 bg-white"}>
                    <div className="skeleton h-48 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            )}

        </div>
    );
}

export default Product;