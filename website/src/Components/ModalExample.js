import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Modal = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
                isOpen ? "" : "hidden"
            }`}
        >
            <div className="modal-container">
                <div className="bg-slate-400  p-4 h-96 lg:w-[500px] rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-4 mt-6  uppercase text-center">
                        Please Login Here!
                    </h2>
                    <form className="px-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Form.Group className="d-flex justify-content-center mt-3">
                            <Button variant="primary">Login</Button>
                        </Form.Group>
                    </form>
                    {/* Modal close button */}
                    <Form.Group className="d-flex justify-content-center mt-3">
                        <Button
                            onClick={onClose}
                            variant="danger"
                            type="submit"
                        >
                            Close
                        </Button>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
};

export default Modal;
