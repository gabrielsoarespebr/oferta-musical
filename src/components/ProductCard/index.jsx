import { useState } from 'react';
import { Card, Carousel, CarouselItem } from 'react-bootstrap'
import { category } from '../../services/categoryIcon'
import Modal from 'react-modal'
import { RowSecondaryInfo } from '../RowSecondaryInfo'
import style from './style.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import { BsInfoCircleFill } from 'react-icons/bs'

Modal.setAppElement('#root');

export function ProductCard(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Card className={`${style.card} p-0`}>
            <span className={`${style.zoom}`}>
                <Card.Img className={`${style.image}`} variant="top" src={props.info.image[0]} />
            </span>

            <Card.Body className='d-flex flex-column'>

                {/* Type 0 means a row that describes Category and Price */}
                <RowSecondaryInfo info={props.info} type={0} />

                <Card.Title>{props.info.title}</Card.Title>

                {/* Type 1 means a row that describes Author and Address */}
                <RowSecondaryInfo info={props.info} type={1} />

            </Card.Body>

            <Card.Footer className={`${style.footer} d-flex justify-content-center align-items-center gap-2 btn`} onClick={openModal}>
                <BsInfoCircleFill className="fs-5 text-white"></BsInfoCircleFill>
                <Card.Text className='text-white fw-semibold fs-4'>INFO</Card.Text>
            </Card.Footer>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} className={style.modalContent} overlayClassName={style.modalOverlay}>
                <div className='d-flex justify-content-between align-items-start'>

                    <h2>{props.info.title}</h2>
                    <RiCloseFill onClick={closeModal} className="fs-2 cursor-pointer"></RiCloseFill>
                </div>
                <div className="d-flex flex-column-reverse flex-sm-row gap-4">
                    <div className='col-12 col-sm-6'>
                        <Carousel>
                            {
                                props.info.image.map((imageUrl, key) => {
                                    return <CarouselItem key={key}>
                                        <img src={imageUrl} alt="Instrument photo" />
                                    </CarouselItem>
                                })
                            }
                        </Carousel>
                    </div>
                    <div className='col-12 col-sm-6 d-flex flex-column gap-3'>
                        <p className='my-0'>{props.info.description}</p>
                        <div>
                            <div className='d-flex'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex gap-2'>
                                        <img src={`https://img.icons8.com/fluency-systems-filled/48/${category[props.info.category]}`} alt={props.info.title} className='col-1' />
                                        <span className='fw-semibold m-0 small'>
                                            {props.info.category[0].toUpperCase()}
                                            {props.info.category.substring(1)}
                                        </span>
                                    </div>

                                    <div className='d-flex m-0 align-items-center gap-2'>
                                        <img className='col-1' src="./src/assets/icons/icons8-usuário-30.png" alt="User icon" />
                                        <span className='fw-semibold m-0 small'>
                                            {props.info.author}
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-center gap-2'>
                                        <img className='col-1 shadow-sm' src={`https://github.com/bgeneto/bandeiras-br/blob/master/imagens/${props.info.address.state}.png?raw=true`} alt="State flag" />
                                        <span className='fw-semibold m-0 small'>
                                            {props.info.address.city} - {props.info.address.state}
                                        </span>
                                    </div>
                                </div>
                                <div className='fs-1 fw-semibold'>R${props.info.price}</div>

                            </div>


                        </div>

                        <button className={`${style.buyBtn} text-white fw-semibold fs-4 btn d-flex justify-content-center align-items-center gap-2`} onClick={openModal}>
                            <FaShoppingCart></FaShoppingCart>
                            COMPRAR
                        </button>
                    </div>
                </div>


            </Modal>


        </Card>
    )
}