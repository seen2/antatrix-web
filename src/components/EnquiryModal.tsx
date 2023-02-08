import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EnquiryForm from './EnquiryForm';

export function EnquiryModal(props: { children: JSX.Element }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                {props.children}
            </div>
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark text-light' closeButton >
                    <Modal.Title className='bg-dark text-light'>Enquiry</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
                <EnquiryForm />
            </Modal>
        </>
    );
}
