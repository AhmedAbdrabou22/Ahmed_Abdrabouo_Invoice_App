import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const SingleInvoice = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState(null);
    const [deleted, setDeleted] = useState(false);

    //Get Single Invoice
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


    //Delete Invoice
    const deleteInvoice = async () => {
        try {
            await axios.delete(`http://localhost:3031/invoices/${id}`);
            // After successful deletion, you may want to redirect the user or update the UI
            setDeleted(true);
        } catch (error) {
            console.error('Error deleting invoice:', error);
        }
    };

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
            {deleted ? (
                <h1>Invoice Not Found</h1>
            ) : (
                invoice ? (
                    <div >
                        <div className='headerSingleInvoice'>
                            <div style={{ background: getBackgroundColor(invoice.status) }} className='statusInvoice d-flex'>
                                <div className='circleStatus' style={{ background: getColor(invoice.status) }}></div>
                                <div style={{ color: getColor(invoice.status) }}>{invoice.status}</div>
                            </div>

                            <div>
                                <button className='btn' style={{ background: "#262943", borderRadius: "20px", color: "white", marginRight: "10px" }}>Edit</button>
                                <button className='btn' style={{ background: "#ef5956", borderRadius: "20px", color: "white", marginRight: "10px" }} onClick={deleteInvoice}>Delete</button>
                                {
                                    invoice ? (invoice.status !== "paid" ? (<button className='btn' style={{ background: "#7c5df6", borderRadius: "20px", color: "white", marginRight: "10px" }}>Make As Paid</button>) : null) : null
                                }
                            </div>
                        </div>



                        <div className='BodySingleInvoice mt-5'>
                            <div>
                                <h2>
                                    {invoice.invoiceNumber}
                                </h2>
                                <span>{invoice.desc}</span>
                            </div>
                            <div className='d-flex justify-content-between mt-5'>
                                <div>
                                    <div>
                                        <h5>Invoice Date</h5>
                                        <span>{invoice.date}</span>
                                    </div>
                                    <div className='mt-3'>
                                        <h5>Invoice Date End</h5>
                                        <span>{invoice.dateEnd}</span>
                                    </div>
                                </div>
                                <div>
                                    <p>Send to</p>
                                    <span>{invoice.clientEmail}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <p>Loading...</p>
            )}
        </div>
    )
}

export default SingleInvoice
