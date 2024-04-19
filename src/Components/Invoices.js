import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IoIosAddCircle, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddInvoice from '../Modals/AddInvoice';
import { urlBase } from '../Api';

const Invoices = () => {
    const [invoicesData, setInvoicesData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("all");

    const getInvoices = async () => {
        try {
            const response = await axios.get(`${urlBase}/invoices`);
            setInvoicesData(response.data);
        } catch (error) {
            console.error('Error fetching invoices:', error);
        }
    }

    useEffect(() => {
        getInvoices();
    }, []);

    const getColor = (status) => {
        switch (status) {
            case "pending":
                return '#b97320';
            case "paid":
                return '#32a588';
            case "draft":
                return '#e0e3f8';
            default:
                return '#000000';
        }
    };

    const getBackgroundColor = (status) => {
        switch (status) {
            case "pending":
                return '#2a2833';
            case "paid":
                return '#1f2c3f';
            case "draft":
                return '#2a2c43';
            default:
                return '#000000';
        }
    };

    

    const filteredInvoices = selectedStatus === "all" ? invoicesData : invoicesData.filter(invoice => invoice.status === selectedStatus);

    return (
        <div className='invoice font'>
            <div className='headerInvoice'>
                <div>
                    <h2>Invoices</h2>
                    <span className="showLarge">There are total invoices</span>
                    <span className="showSmall">7 invoices</span>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <div className='w-100'>
                        <Form.Select
                            aria-label="Default select example"
                            style={{ background: "transparent", color: "white", border: "none" }}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            value={selectedStatus}
                        >
                            <option hidden>Filter By State</option>
                            <option value="all" style={{ backgroundColor: "#141625", color: "white" }}>All Status</option>
                            <option value="pending" style={{ backgroundColor: "#141625", color: "white" }}>Pending</option>
                            <option value="paid" style={{ backgroundColor: "#141625", color: "white" }}>Paid</option>
                            <option value="draft" style={{ backgroundColor: "#141625", color: "white" }}>Draft</option>
                        </Form.Select>
                    </div>

                    <AddInvoice getInvoices={getInvoices}/>
                </div>
            </div>

            {
                filteredInvoices.map((invoice) => (
                    <div className='mt-5' key={invoice.id}>
                        <div className='w-100 bodyInvoice' >
                            <p>#{invoice.invoiceNumber}</p>
                            <p>{invoice.date}</p>
                            <p>{invoice.name}</p>
                            <p>{invoice.price}$</p>
                            <div style={{ background: getBackgroundColor(invoice.status) }} className='statusInvoice d-flex'>
                                <div className='circleStatus' style={{ background: getColor(invoice.status) }}></div>
                                <div style={{ color: getColor(invoice.status) }}>{invoice.status}</div>
                            </div>
                            <Link to={`/invoice/${invoice.id}`}>
                                <span ><IoIosArrowForward /></span>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Invoices;


