import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts, deleteProduct, createProduct }from '../actions/productActions'
import { Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

function HomeScreen({history}){
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    const productCreate = useSelector(state => state.productCreate)
    const {loading:loadingCreate, error:errorCreate, success:successCreate, product:createdProduct} = productCreate

    const createProductHandler = () => {
        dispatch(createProduct())


    }
    useEffect(() => {
        dispatch({type: PRODUCT_CREATE_RESET})

        if (successCreate) {
            history.push(`/admin/product/${createdProduct._id}/edit`)
        }else {
            dispatch(listProducts())
        }

    }, [dispatch, history, successCreate, createdProduct])
    return (
        <div>
            <h1>Список продуктов: </h1>

                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />

                            </Col>

                        ))}

                    </Row>
                    <Row>
                    <Col className='text-center py-3'>
                        <Button className='my-3' onClick={createProductHandler}>
                            Создать продукт
                        </Button>
                    </Col>
                    </Row>

        </div>
    )
}
export default HomeScreen