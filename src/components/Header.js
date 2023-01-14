import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import {ProductListScreen} from '../screens/ProductListScreen'

function Header(){

    const dispatch = useDispatch()


    return (

        <header>
             <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                  <Container>

                    <Navbar.Brand href="/">Tools shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">

                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/admin/productList/">Создать продукт</Nav.Link>

                            <NavDropdown title='Списки' id='adminmenu'>
                            <NavDropdown.Item href="/admin/productList/">Продукты</NavDropdown.Item>
                            </NavDropdown>

                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
        </header>
    )
}
export default Header