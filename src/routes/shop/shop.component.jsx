import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};


export default Shop;






// I shifted this code to categories-preview router for better code optimization.
/*
import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop.styles.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log(categoriesMap);
    return (
        <div className="shop-container">
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }
        </div>
    );
};


export default Shop;

*/



/*
    <Fragment key={title}> 
        <h2>{title}</h2>
        <div className="products-container">
            {
                categoriesMap[title].map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    </Fragment>

*/