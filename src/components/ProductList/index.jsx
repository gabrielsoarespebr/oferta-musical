import { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';
import style from './style.module.css'

export function ProductList() {

    const [productList, setProductList] = useState([]);

    async function fetchProduct() {
        const response = await fetch("src/services/productAPI.js");
        setProductList(await response.json());
    }

    useEffect(() => { fetchProduct() });


    return (
        <Row className="row-cols-3">
            {productList.map(product => <ProductCard key={product.id} info={product} />)}
        </Row>
    )
}