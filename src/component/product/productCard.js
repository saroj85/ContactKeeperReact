import React from 'react';
import Styled from 'styled-components'


const ProductCard = () => {
    return (
        <div id="make-3D-space">
            <div id="product-card">
                <div id="product-front">
                    <div className="shadow"></div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png" alt="" />
                    <div className="image_overlay"></div>
                    <div id="view_details">View details</div>
                    <div className="stats">
                        <div className="stats-container">
                            <span className="product_price">$39</span>
                            <span className="product_name">Adidas Originals</span>
                            <p>Men's running shirt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCard;