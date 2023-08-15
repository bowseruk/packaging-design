// Bootstrap Components
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Layout(props) {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossOrigin="anonymous"
            />
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    {/* <Container> */}
                        <NavbarBrand href="#">Packaging Design</NavbarBrand>
                        <NavbarToggle aria-controls="main-navbar-nav" />
                        <NavbarCollapse id="main-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink href="#">Home</NavLink>
                                <NavDropdown title="Raw Materials">
                                    <NavDropdown.Item href="#">Resins</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Films</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Inks</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Adhesive</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">All</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Semi-finished Materials">
                                    <NavDropdown.Item href="#">Extrusion</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Print</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Lamination</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Slitting</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">All</NavDropdown.Item>
                                </NavDropdown>
                                <NavLink href="#">Articles</NavLink>
                                <NavLink href="#">About</NavLink>
                            </Nav>
                        </NavbarCollapse>
                    {/* </Container> */}
                </Navbar>

            </header>
            <main>
                {props.children}
            </main>
            <footer>
                Designed by Adam Bolsover
            </footer>
        </>
    )
}

export default Layout