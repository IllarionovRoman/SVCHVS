
import { Container, Row, Col, Card , Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'


function Product({product, history}){
    const dispatch = useDispatch()

    const deleteHandler = (id) => {
       if(window.confirm('tochno?')){
            dispatch(deleteProduct(id))
            window.location.reload()
       }
    }

    return (

        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
            <Card.Text as='div'>


            </Card.Text>
            <strong>{product.description}</strong>
            <Card.Text as='h3'>
                {product.price} руб
            </Card.Text>
            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                <i className='fas fa-check'></i>
                Удалить
            </Button>
            <Link to={`/admin/product/${product._id}/edit`}>
                <Button variant='dark' className='btn-sm'>
                    <i className='fas fa-check'></i>
                    Изменить
                </Button>
            </Link>

            </Card.Body>
        </Card>
    )
}
export default Product