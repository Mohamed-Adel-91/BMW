import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { VscAccount } from "react-icons/vsc";
import "./Login.module.css"
import style from "./Login.module.css"

interface LoginProps {
    // Define the type for your 'args' parameter here
    // For example, you can use React.ReactNode or any other appropriate type
    // For example, you can use React.HTMLAttributes<HTMLDivElement>
    args?: React.HTMLAttributes<HTMLDivElement>;
}

const Login: React.FC<LoginProps> = ({ args }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className={style.loginPopUp}>
            <Button className={style.loginButton} color="link" onClick={toggle}>
                <VscAccount />
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Body
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Login;