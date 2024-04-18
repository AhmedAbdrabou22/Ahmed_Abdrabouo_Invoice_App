import React from 'react'
import Navbar from '../Utils/Navbar';
import { Col, Row } from "react-bootstrap";
import Invoices from '../Components/Invoices';
const Main = () => {
    return (
        <div>
            <Row className="py-3">
                <Col sm="0" md="2" lg="2">
                    <Navbar />
                </Col>
                <Col sm="12" className='px-5' md="10" lg="10">
                    <Invoices />
                </Col>
            </Row>
        </div>
    )
}

export default Main
