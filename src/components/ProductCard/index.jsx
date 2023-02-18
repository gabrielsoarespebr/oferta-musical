import { Button, Card, Row } from 'react-bootstrap'
import style from './style.module.css'
import { category } from '../../services/categoryIcon'

export function ProductCard(props) {
    return (
        <Card className={`${style.card} rounded`}>
            <Card.Img variant="top" src={props.info.image[0]} />
            <Card.Body>
                <div className='d-flex justify-content-around align-items-center'>
                    <Card.Text className='d-flex m-0 align-items-center gap-2'>
                        <img src={`src/assets/icons/${category[props.info.category]}`} alt={props.info.title} />
                        <p className='fw-semibold m-0'>
                            {props.info.category[0].toUpperCase()}
                            {props.info.category.substring(1)}
                        </p>
                    </Card.Text>
                    <Card.Text className='h5'>R${props.info.price}</Card.Text>
                </div>

                <Card.Title>{props.info.title}</Card.Title>

                <div className='d-flex justify-content-around align-items-center'>
                    <Card.Text className='d-flex m-0 align-items-center gap-2'>
                        <img className='col-3' src="./src/assets/icons/icons8-usuário-30.png" alt="User icon" />
                        <p className='fw-semibold m-0'>
                            {props.info.author}
                        </p>
                    </Card.Text>
                    <Card.Text className='d-flex m-0 align-items-center gap-2'>
                        <img className='col-2' src="./src/assets/icons/icons8-marcador-50.png" alt="Place mark icon" />
                        <p className='fw-semibold m-0'>
                            {props.info.address.city} - {props.info.address.state}
                        </p>
                    </Card.Text>
                </div>

            </Card.Body>
            <Card.Footer>COMPRAR</Card.Footer>

        </Card>
    )
}