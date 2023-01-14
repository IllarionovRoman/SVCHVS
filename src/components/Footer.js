import React, { useState, useEffect} from 'react'
import { Form, Button, Row, Col, Container, Table} from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { listProducts, deleteProduct, createProduct }from '../actions/productActions'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'
function Footer(){

    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Tools shop 2022</Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer