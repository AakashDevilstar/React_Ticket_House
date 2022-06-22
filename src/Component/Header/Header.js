import React,{useContext} from "react";
import styles from "./Header.module.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Navbar,Container,FormControl, Dropdown,Badge,Nav} from "react-bootstrap"; 
import TrainContext from "../Context/TrainContext";
import style from "./Header.module.css"
// import style from 'Header.module.css';

const Header = (props) => {

    const value=useContext(TrainContext);

    const cartHandler=()=>{
        props.oncart(false);
    }

    const cartchangeHandler=()=>{
        props.oncart(true);
    }

    return <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <a href="/">React Ticket House</a>
            </Navbar.Brand>
            <Navbar.Text className={styles.search}>
                <FormControl
                   style={{width: 500}}
                   placeholder="Search a ticket"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" className={style.cart}>
                        <AiOutlineShoppingCart color="white" fontSize="25px" onClick={cartchangeHandler}/>
                        <Badge onClick={cartHandler}>{value.totalTickets}</Badge>
                    </Dropdown.Toggle>
                    {/* 
                    <Dropdown.Menu style={{ minWidth: 370}}>
                        <span style={{padding: 10}}>Cart is empty</span>
                    </Dropdown.Menu> */}
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
};

export default Header;