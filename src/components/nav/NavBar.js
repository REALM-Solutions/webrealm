import React, { Component } from 'react';
import { Button, Nav, NavDropdown, Navbar, Form, FormControl} from 'react-bootstrap';
import logo from '../../assets/images/logo3.png';

class NavbarPage extends Component {
    state = {
        collapse1: false,
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }


    render() {
        return (
            <div className='navbar' style={{ width: '100%', position: 'fixed', top: '0', background: '#343a40', justifyContent: ' space-between' }} >
                <Navbar.Brand padding="0" href="#home"><img src={logo}
                    width="50" height="50" alt="" className="d-inline-block align-top" /></Navbar.Brand>
                <Form inline padding="25px" >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary" style={{ margin: '20px' }}>Search</Button>
                </Form>

                <Button variant="outline-primary" style={frstBtnStyle}>Home33</Button>
                <Button variant="outline-primary" style={btnStyle}>Events333</Button>
                <Button variant="outline-primary" style={btnStyle} >Log In333</Button>

                <Nav className="navRight" style={{ marginLeft: 'auto' }} >
                    <Navbar bg="dark" expand="lg"  >

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav"  >

                            <NavDropdown title="Menu" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">My Events</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.2">Profile</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Create Event</NavDropdown.Item>
                            </NavDropdown>

                        </Navbar.Collapse>
                    </Navbar>
                </Nav>

            </div>
        );
    }
}
const frstBtnStyle = {
    marginLeft: '50px',
    margin: '10px'
}
const btnStyle =
{
    margin: '10px'
}

export default NavbarPage;
