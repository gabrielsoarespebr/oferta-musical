import { Card } from 'react-bootstrap'
import { category } from '../../services/categoryIcon'

export function RowSecondaryInfo(props) {

    // Type 0 means a row that describes Category and Price
    if (props.type === 0) {
        return (
            <div className='d-flex justify-content-around align-items-center'>
                <Card.Text className='d-flex m-0 align-items-center gap-2'>
                    <img src={`https://img.icons8.com/fluency-systems-filled/48/${category[props.info.category]}`} alt={props.info.title} className='col-2' />
                    <span className='fw-semibold m-0 small'>
                        {props.info.category[0].toUpperCase()}
                        {props.info.category.substring(1)}
                    </span>
                </Card.Text>
                <Card.Text className='h6'>R${props.info.price}</Card.Text>
            </div>
        )
    }

    // Type 1 means a row that describes Author and Address
    if (props.type === 1) {
        return (
            <div className='d-flex justify-content-between align-items-center mt-auto'>
                <Card.Text className='d-flex m-0 align-items-center gap-2 w-50'>
                    <img className='col-2' src={"../../src/assets/icons/icons8-usuário-30.png"} alt="User icon" />
                    <span className='fw-semibold m-0 small'>
                        {props.info.author}
                    </span>
                </Card.Text>
                <Card.Text className='d-flex justify-content-end align-items-center gap-2 w-50'>
                    <img className='col-2 shadow-sm' src={`https://github.com/bgeneto/bandeiras-br/blob/master/imagens/${props.info.address.state}.png?raw=true`} alt="State flag" />
                    <span className='fw-semibold m-0 small'>
                        {props.info.address.city} - {props.info.address.state}
                    </span>
                </Card.Text>
            </div>
        )
    }

}