import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const SingleInvoice = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        const getInvoice = async () => {
            try {
                const response = await axios.get(`http://localhost:3031/invoices/${id}`);
                setInvoice(response.data);
            } catch (error) {
                console.error('Error fetching invoice:', error);
            }
        };

        getInvoice();
    }, [id]);

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

    return (
        <div>
            {/* {invoice ? (
                <div>
                    <h1>{invoice.invoiceNumber}</h1>
                    <p>Name: {invoice.name}</p>
                    <p>Status: {invoice.status}</p>
                    <p>Price: {invoice.price}</p>
                    <p>Date: {invoice.date}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )} */}
            {
                invoice ? (
                    <div >
                        <div className='headerSingleInvoice'>
                            <div style={{ background: getBackgroundColor(invoice.status) }} className='statusInvoice d-flex'>
                                <div className='circleStatus' style={{ background: getColor(invoice.status) }}></div>
                                <div style={{ color: getColor(invoice.status) }}>{invoice.status}</div>
                            </div>

                            <div>
                                <button className='btn' style={{ background: "#262943", borderRadius: "20px", color: "white", marginRight: "10px" }}>Edit</button>
                                <button className='btn' style={{ background: "#ef5956", borderRadius: "20px", color: "white", marginRight: "10px" }}>Delete</button>
                                <button className='btn' style={{ background: "#7c5df6", borderRadius: "20px", color: "white", marginRight: "10px" }}>Make As Paid</button>
                            </div>
                        </div>



                        <div className='BodySingleInvoice mt-5'>
                            <h2>
                                {invoice.invoiceNumber}
                            </h2>
                        </div>
                    </div>
                ) : <p>Loading...</p>
            }

        </div>
    )
}

export default SingleInvoice
