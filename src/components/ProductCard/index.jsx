import { Card } from 'react-bootstrap'
import { RowSecondaryInfo } from '../RowSecondaryInfo'
import style from './style.module.css'

export function ProductCard(props) {
    return (
        <Card className={`${style.card} p-0`}>
            <Card.Img className={`${style.image}`} variant="top" src={props.info.image[0]} />
            <Card.Body className='d-flex flex-column'>

                {/* Type 0 means a row that describes Category and Price */}
                <RowSecondaryInfo info={props.info} type={0} />

                <Card.Title>{props.info.title}</Card.Title>

                {/* Type 1 means a row that describes Author and Address */}
                <RowSecondaryInfo info={props.info} type={1} />

            </Card.Body>

            <Card.Footer className={`${style.footer} d-flex justify-content-center align-items-center gap-2 btn`}>
                <img className='' src="./src/assets/icons/icons8-carrinho-de-compras-30.png" alt="Cart icon" />
                <Card.Text className='text-white fw-semibold fs-4'>COMPRAR</Card.Text>
            </Card.Footer>


        </Card>
    )
}