import { Button, Form, Modal, ModalHeader,Table } from 'react-bootstrap'
export const Model = () => {
    return (
        <div className='container bg-dark'>
            <h1>Model page</h1>
            <Button>fdklajfd</Button>
            {/* <Modal show>
                <Modal.Header><Modal.Title>User</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <div className="row gap-4 ">
                                <div className="col-8 mx-auto">
                                    <input type="text" className='form-control' placeholder='Enter Your Name' />

                                </div>
                                <div className="col-8 mx-auto">
                                    <Form.Select>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                    </Form.Select>

                                </div>
                                <div className="col-8 mx-auto">
                                    <Form.Select>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                    </Form.Select>

                                </div>
                                <div className="col-8 mx-auto">
                                    <Form.Select>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                        <option value="">Save</option>
                                    </Form.Select>

                                </div>
                                <div className="col-8 ms-auto">
                                    <Button>Save</Button>

                                </div>
                            </div>

                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal> */}

            <Table className='table table-bordered'>
                <thead>
                    <tr>
                        <thd>Name</thd>
                        <thd>Name</thd>
                        <thd>Name</thd>
                        <thd>Name</thd>
                        <thd>Name</thd>
                        <thd>Name</thd>
                        <thd>Name</thd>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}