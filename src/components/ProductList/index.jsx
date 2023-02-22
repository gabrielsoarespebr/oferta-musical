import { Row } from 'react-bootstrap';
import { ProductCard } from '../ProductCard';

export function ProductList({ searchValue, productList }) {
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