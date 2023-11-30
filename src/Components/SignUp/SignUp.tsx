import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Footer from "../Footer/Footer"
import style from "./SignUp.module.css"
import NavBar from "../Header/NavBar/NavBar"



const SignUp = () => {
    return (
        <div>
            <img className={style.img} src="../../../public/img/22.jpg" alt="" />
            <div className={style.signUpPage}>
                <NavBar />
                <div className={style.title}>
                    Sign Up
            </div>
            <div className={style.signUpForm}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Your EMail"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Enter Password"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleFile">
                                Upload your image profile
                            </Label>
                            <Input
                                id="exampleFile"
                                name="file"
                                type="file"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={9}>
                                <FormGroup>
                                    <Label for="exampleAddress">
                                        Address
                                    </Label>
                                    <Input
                                        id="exampleAddress"
                                        name="address"
                                        placeholder="1234 Main St"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleCity">
                                        City
                                    </Label>
                                    <Input
                                        id="exampleCity"
                                        name="city"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleState">
                                        State
                                    </Label>
                                    <Input
                                        id="exampleState"
                                        name="state"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="exampleZip">
                                        Zip
                                    </Label>
                                    <Input
                                        id="exampleZip"
                                        name="zip"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleTel">
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="exampleTel"
                                        type="tel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Label
                                for="exampleText"
                                sm={2}
                            >
                                Notes
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                />
                            </Col>
                        </FormGroup>
                        <Button color="primary" className="mr-4 mt-2">
                            Submit
                        </Button>
                    </Form>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
        </div>
    )
}

export default SignUp