import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/product-slice";
import ProductSingle from "./ProductSingle";

const Products = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.product)

    // The above ine can also be written like this:
        // const products = useSelector((state => state.product.products))

    // The above line can be understood as: store.product.products
    // where the store is the state
    // where product is the reducer
    // and where products is inside the initial steate of the reducer

    // console.log(products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            <h1>Products</h1>
            {products.map((product => 
                <ProductSingle key={product.id} {...product}/>
            ))}
        </div>
    )
}

export default Products