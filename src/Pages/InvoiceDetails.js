// import React, { useEffect, useState } from 'react'
// import Navbar from '../Utils/Navbar';
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';
// import { useParams } from 'react-router-dom';


// const InvoiceDetails = () => {

//     const { id } = useParams();
//     const [invoicesData, setInvoicesData] = useState([]);

//     const getInvoices = async () => {
//         try {
//             const response = await axios.get('http://localhost:3031/invoices');
//             setInvoicesData(response.data);
//         } catch (error) {
//             console.error('Error fetching invoices:', error);
//         }
//     }

//     return (
//         <div className='invoice font'>
//             <Row className="py-3">
//                 <Col sm="0" md="2" lg="2">
//                     <Navbar />
//                 </Col>
//                 <Col sm="12" className='px-5' md="10" lg="10">
//                     <h1>{id}</h1>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

// export default InvoiceDetails


import React, { useEffect, useState } from 'react';
import Navbar from '../Utils/Navbar';
import { Col, Row } from "react-bootstrap";

import SingleInvoice from '../Components/SingleInvoice';

const InvoiceDetails = () => {
   
    return (
        <div className='invoice font'>
            <Row className="py-3">
                <Col sm="0" md="2" lg="2">
                    <Navbar />
                </Col>
                <Col sm="12" className='px-5' md="10" lg="10">
                    <SingleInvoice/>
                </Col>
            </Row>
        </div>
    );
}

export default InvoiceDetails;
