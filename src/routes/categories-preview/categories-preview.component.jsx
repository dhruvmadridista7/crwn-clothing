import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log(categoriesMap);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                })
            }
        </Fragment>
    );
};


export default CategoriesPreview;



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