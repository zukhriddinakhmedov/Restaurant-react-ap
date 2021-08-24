import { Navbar, Nav } from 'react-bootstrap'

const MyNavBar = ({ title, color }) => {
    return (
        <Navbar onClick={(e) => console.log('clicked')} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">{title} - Strive for food</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Menu</Nav.Link>
                    <Nav.Link href="#pricing">Reservation</Nav.Link>
                    <Nav.Link href="#deets">Find us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavBar