import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';
import style from './style.module.css'

export function ProductList({ searchValue }) {

    const [productList, setProductList] = useState([]);

    async function fetchProduct() {
        const response = await fetch("src/services/productAPI.js");
        setProductList(await response.json());
    }

    useEffect(() => { fetchProduct() });

    return (
        <Row className="row-cols-3 w-75">
            {
                productList
                    .filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(productFiltered => <ProductCard key={productFiltered.id} info={productFiltered} />)
            }
        </Row>
    )
}