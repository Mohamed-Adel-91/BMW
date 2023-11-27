import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    ButtonGroup,
    Input,
    Label,
} from 'reactstrap';
import style from "./Search.module.css"

function Search() {
    const [open, setOpen] = useState<string>('1');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <div className={style.searchBody}>
            <Accordion className={style.filterBox} open={open} toggle={toggle}>
                <h2>Search</h2>
                <p>500+ CARS AVAILABLE</p>
                <hr></hr>
                <Input
                    id="Postcode/Location"
                    name="Postcode/Location"
                    placeholder="Postcode/Location"
                />
                <br />
                <Input
                    id="Nationwide"
                    name="Nationwide"
                    placeholder="Nationwide"
                />
                <hr></hr>
                <ButtonGroup className="my-2">
                    <Button outline>
                        CASH PRICE
                    </Button>
                    <Button outline>
                        FINANCE
                    </Button>
                </ButtonGroup>
                <hr></hr>
                <Label for="exampleSelect">
                    From:
                </Label>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                </Input>
                <br />
                <Label for="exampleSelect">
                    To:
                </Label>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                    <option>
                        5
                    </option>
                </Input>
                <hr></hr>
                <Label for="exampleSelect">
                    CHOOSE YOUR BMW MODEL
                </Label>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                        3 Series
                    </option>
                    <option>
                        3 Series
                    </option>
                    <option>
                        3 Series
                    </option>
                    <option>
                        3 Series
                    </option>
                    <option>
                        3 Series
                    </option>
                </Input>
                <br />
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                        Select From Models
                    </option>
                    <option>
                        Select From Models
                    </option>
                    <option>
                        Select From Models
                    </option>
                    <option>
                        Select From Models
                    </option>
                    <option>
                        Select From Models
                    </option>
                </Input>
                <br />
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                        Select From Trim Levels
                    </option>
                    <option>
                        Select From Trim Levels
                    </option>
                    <option>
                        Select From Trim Levels
                    </option>
                    <option>
                        Select From Trim Levels
                    </option>
                    <option>
                        Select From Trim Levels
                    </option>
                </Input>
                <hr></hr>
                <AccordionItem>
                    <AccordionHeader targetId="1">AGE</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">MILEAGE</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">FUEL TYPE</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">TRANSMISSION</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">COLOUR</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="6">ENGINE DERIVATIVES</AccordionHeader>
                    <AccordionBody accordionId="6">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="7">2 / 4 WHEEL DRIVE</AccordionHeader>
                    <AccordionBody accordionId="7">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="8">PACKS</AccordionHeader>
                    <AccordionBody accordionId="8">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="9">FEATURES</AccordionHeader>
                    <AccordionBody accordionId="9">
                        <option>Choose One</option>
                        <option>Choose Two</option>
                        <option>Choose Three</option>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <div>
                <p>
                    Finance figures are calculated for a
                    BMW Select (PCP) agreement over 48
                    months and an annual mileage of
                    10,000 miles where available. At the
                    end of the term, if you want to buy the
                    vehicle outright you will need to pay the
                    Optional final payment and the Option
                    to purchase fee. Terms and conditions
                    apply.
                </p>
                <p>
                    Some vehicles may be ex-fleet or may
                    have had multiple users. All Approved
                    Used BMWs undergo meticulous
                    checks by trained BMW technicians and
                    come with a minimum 12 month
                    unlimited mileage BMW warranty.
                    Please check the vehicle’s history with
                    the selling retailer when making your
                    enquiry.
                </p>
            </div>
        </div>
    );
}

export default Search