import React , {useContext, useEffect} from 'react';
import ProductCard from './productCard';
import ProductContext from '../../context/product/productContext';

const Products = () => {
    const productContext = useContext(ProductContext);
    const {getProduct, products} = productContext;

    useEffect(() => {
        getProduct()
    }, []);

    console.log(products)


    return (
        <div style={{width: '100%', display: 'flex', }}>
          {
              products && products.map((product, index) => {
                  return (
                      <div style={{width: '300px', margin: '10px'}}><ProductCard key={index} product={product}/></div>
                  )
              })
          }
        </div>
    )
}


export default Products;