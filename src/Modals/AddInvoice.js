//Modal For Add Invoice
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoIosAddCircle, IoIosArrowForward } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
const AddInvoice = ({ getInvoices }) => {
    const [show, setShow] = useState(false);
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [city, setCitySender] = useState("");
    const [postCode, setPostCodeSender] = useState("");
    const [country, serCountrySender] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [desc, setDesc] = useState("");

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true)
    }


    const addInvoice = async (newInvoice) => {
        // التحقق من صحة البيانات قبل الإضافة
        if (invoiceNumber === "" || name === "" || status === "" || price === "" || date === "" || city === "" || postCode === "" || country === "" || clientEmail === "" || clientAddress === "") {
            alert('Please fill in all fields.');
            return; // لا ينفذ الإضافة إذا كان أي من الحقول فارغًا
        }

        try {
            await axios.post('/invoices', newInvoice);
            getInvoices();
        } catch (error) {
            console.error('Error adding invoice:', error);
        } finally {
            handleClose();
            setInvoiceNumber("")
            setName("")
            setStatus("")
            setPrice("")
            setDate("")
            setDateEnd("")
            setCitySender("")
            setPostCodeSender("")
            serCountrySender("")
            setClientEmail("")
            setClientAddress("")
            setDesc("")
        }
    };

    return (
        <div className='font invoice' style={{ width: "100%" }}>

            <button className='btn addInvoice' onClick={handleShow}><IoIosAddCircle fontSize={"30px"} />New Invoice</button>
            <Modal show={show} onHide={handleClose} centered className='font' style={{ width: "100%", color: "white" }} dialogClassName="modal-lg">
                <Modal.Body style={{ background: "#141625", padding: "10px" }}>


                    {/* Modal Body */}
                    <span style={{ color: "#261a69" }}>Bill From</span>
                    <div className='mt-3'>
                        <div>
                            <label>Street Address</label>
                            <br></br>
                            <input type="text"
                                onChange={(e) => {
                                    setInvoiceNumber(e.target.value)
                                }}
                                className='inputData' name='streetAddress' id="streetAddress" />
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <div>
                            <label>City</label>
                            <br></br>
                            <input type="text"
                                onChange={(e) => {
                                    setCitySender(e.target.value);
                                }} className='inputRelated' name='City' id="City" />
                        </div>
                        <div>
                            <label>Post Code</label>
                            <br></br>
                            <input type="number"

                                onChange={(e) => {
                                    setPostCodeSender(e.target.value);
                                }} className='inputRelated' name='Post' id="Post" />
                        </div>
                        <div>
                            <label>Country</label>
                            <br></br>
                            <input type="text"

                                onChange={(e) => {
                                    serCountrySender(e.target.value);
                                }} className='inputRelated' name='Country' id="Country" />
                        </div>
                    </div>
                    <span style={{ color: "#261a69" }}>Bill From</span>
                    <div className='mt-3'>
                        <div>
                            <label>Client Name</label>
                            <br></br>
                            <input type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                className='inputData' name='ClientName' id="ClientName" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <label>Client Email</label>
                            <br></br>
                            <input type="email"
                                onChange={(e) => {
                                    setClientEmail(e.target.value);
                                }}
                                className='inputData' name='Email' id="Email" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div>
                            <label>Client Address</label>
                            <br></br>
                            <input type="text"
                                onChange={(e) => {
                                    setClientAddress(e.target.value);
                                }}
                                className='inputData' name='ClientAddress' id="ClientAddress" />
                        </div>
                    </div>
                    <div>
                        <label>Invoice Start Date</label>
                        <br></br>
                        <div className='mt-2'>
                            <input type='date'
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                className='inputData' />
                        </div>
                    </div>
                    <div>
                        <label>Invoice End Date</label>
                        <br></br>
                        <div className='mt-2'>
                            <input type='date'
                                onChange={(e) => {
                                    setDateEnd(e.target.value)
                                }}
                                className='inputData' />
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <div>
                            <label>Invoice Price</label>
                            <br></br>
                            <input type="number"
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                }}
                                className='inputRelated' name='Price' id="Price" />
                        </div>
                        <div>
                            <label>Status</label>
                            <br></br>
                            <Form.Select
                                aria-label="Default select example"
                                style={{ background: "transparent", color: "white", border: "none" }}
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            >
                                <option hidden>Choose Status</option>
                                <option value="pending" style={{ backgroundColor: "#141625", color: "white" }}>Pending</option>
                                <option value="paid" style={{ backgroundColor: "#141625", color: "white" }}>Paid</option>
                                <option value="draft" style={{ backgroundColor: "#141625", color: "white" }}>Draft</option>
                            </Form.Select>
                        </div>
                    </div>


                    <div>
                        <div>
                            <label>Project Description</label>
                            <br></br>
                            <input type="text"
                                onChange={(e) => {
                                    setDesc(e.target.value)
                                }}
                                className='inputRelated' name='Price' id="Price" />
                        </div>
                    </div>



                    {/* Modal Footer */}
                    <div className='mt-3'>
                        <Button style={{ background: "#252946", border: "none", marginRight: "5px" }} onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button style={{ background: "#7c5dfa", border: "none", marginRight: "5px" }} onClick={() => addInvoice({
                            id: Math.random() * 10,
                            invoiceNumber: invoiceNumber,
                            name: name,
                            status: status,
                            price: price,
                            date: date,
                            city: city,
                            postCode: postCode,
                            country: country,
                            dateEnd: dateEnd,
                            desc: desc,
                            clientEmail: clientEmail,
                            clientAddress: clientAddress,
                        })}>
                            Add Invoice
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddInvoice;

