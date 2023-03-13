import { Row } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';

export function ProductList({ searchValue, categorySelected, priceMin, priceMax, stateAbbreviaton, productList }) {
    return (
        <Row className="col-12 col-sm-9 row-cols-1 row-cols-sm-2 row-cols-lg-3 m-auto mt-0">
            {
                productList
                    .filter(product =>
                        product.title.toLowerCase().includes(searchValue.toLowerCase())
                        &&
                        product.category.includes(categorySelected)
                        &&
                        product.price >= priceMin && product.price <= priceMax
                        &&
                        product.address.state.includes(stateAbbreviaton)
                    )
                    .map(productFiltered => <ProductCard key={productFiltered.id} info={productFiltered} />)
            }
        </Row>
    )
}