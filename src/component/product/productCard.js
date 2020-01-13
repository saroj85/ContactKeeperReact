import React from 'react';

const ProductCard = ({ product }) => {
    const { name, decription, price, images, avalibale, offer } = product;

    console.log("FROM CARD", product);

    return (
        <div id="product-front">
            {!avalibale &&
                <div className="p_not_avalibal">
                    Out of stock
        </div>}

            {offer &&
                <div className="offer">
                    {offer} OFF
        </div>}
            <div className="shadow"></div>
            <div style={{ textAlign: 'center' }}>
                {images && images.map((image, index) => {
                    if (index === 0) {
                        return <img src={image} alt={name} style={{ height: "200px" }} />
                    }
                })}
            </div>

            <div className="stats" style={{ marginTop: '10px' }}>
                <div className="stats-container">
                    <div className="product_name">{name && name.substr(0, 20) + "..."}</div>
                    <div className="product_price"><span style={{ textDecoration: "line-through", color: "#222" }}>{price.fprice}</span> &nbsp;&nbsp;<span>{price.price}</span></div>
                    <p></p>
                </div>
            </div>


            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                {avalibale &&
                    <React.Fragment>
                        <button>Add Cart</button>
                        <button>Buy Now</button>
                    </React.Fragment>}
                {!avalibale &&
                    <button>Notify me</button>
                }
            </div>
        </div>
    )
};




export default ProductCard;