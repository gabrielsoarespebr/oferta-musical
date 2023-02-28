import { Row } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';

export function ProductList({ searchValue, categorySelected, priceMin, priceMax, stateAbbreviaton, productList }) {
    return (
        <Row className="row-cols-3 w-75">
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