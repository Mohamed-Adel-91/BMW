import { useState } from 'react';
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Nav, NavItem, NavLink,
    TabContent, TabPane,
    Row, Col, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { VscAccount } from "react-icons/vsc";
import "./Login.module.css"
import style from "./Login.module.css"
import { Link } from 'react-router-dom';

interface LoginProps {
    // Define the type for your 'args' parameter here
    // For example, you can use React.ReactNode or any other appropriate type
    // For example, you can use React.HTMLAttributes<HTMLDivElement>
    args?: React.HTMLAttributes<HTMLDivElement>;
}

const Login: React.FC<LoginProps> = ({ args }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const modalStyle = {
        borderRadius: '0px',
    };

    const inputStyle = {
        borderRadius: '0px',
    };

    const footer = {
        width: "97.8%",
        marginLeft: "5px"
    };

    return (
        <div className={style.loginPopUp}>
            <Button className={style.loginButton} color="link" onClick={toggle}>
                <VscAccount />
            </Button>
            <Modal style={modalStyle} className={`${style.model} custom_modal_class`} isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>
                    <Nav>
                        <NavItem>
                            <NavLink
                                className="active"
                                onClick={function noRefCheck() { }}
                            >
                                Log in
                            </NavLink>
                        </NavItem>
                    </Nav>
                </ModalHeader>
                <ModalBody>
                    <TabContent activeTab="1">
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                UserName
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Enter Your username"
                                                type="email"
                                                style={inputStyle}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">
                                                Password
                                            </Label>
                                            <Input
                                                id="examplePassword"
                                                name="password"
                                                placeholder="Enter Your Password"
                                                type="password"
                                                style={inputStyle}
                                            />
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </ModalBody>
                <Row style={footer} xs="1" md="1" sm="1">
                    <ModalFooter className={style.foot}>
                        <Col >
                            <div className={style.signDiv}>
                                <Link
                                    className={style.signLink}
                                    to="/SignUp"
                                >
                                    SingUp
                                </Link>
                                {/* <Link
                                    className={style.signLink}
                                    to="/"
                                >
                                    SingOut
                                </Link> */}
                            </div>
                        </Col>
                        <Col >
                            <div className={style.buttonsDiv}>
                                <Button style={inputStyle} color="primary" onClick={toggle}>
                                    Log in
                                </Button>{' '}
                                <Button style={inputStyle} color="secondary" onClick={toggle}>
                                    Cancel
                                </Button>
                            </div>
                        </Col>
                    </ModalFooter>
                </Row>
            </Modal>
        </div>
    );
};

export default Login;