import React,{Component} from 'react';
import mainlogo from './myntralogo.png';
import {Navbar,Nav,Form,FormControl,Row,Col} from 'react-bootstrap';
import './Navigationbar.css';

class Navigationbar extends Component{
    render(){
        return(
            <div className="Navtop fixed-top">
            <Navbar className="shadow p-3 mb-5">
          <Navbar.Brand href="#home" className="mainlogo">
          <img
              src={mainlogo}
              height="48"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#men">MEN</Nav.Link>
            <Nav.Link href="#women">WOMEN</Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#home">HOME & LIVING</Nav.Link>
            <Nav.Link href="#essentials">ESSENTIALS</Nav.Link>
          </Nav>
          <Form inline className="searchbar">
            <FormControl type="text" size="sm" className="pl-4" placeholder="Search for products,brands and more" />
          </Form>
          <div className="user">
              <Col>
                <Row className="d-flex justify-content-center">
                <ion-icon name="person-outline"></ion-icon>
                </Row>
                <Row className="navbar-icon-text d-flex justify-content-center">
                  Profile
                </Row>
              </Col>
        </div>
        <div className="bookmark">
          <Col>
            <Row className="d-flex justify-content-center">
            <ion-icon name="bookmark-outline" ></ion-icon>
            </Row>
            <Row className="navbar-icon-text d-flex justify-content-center">
              Wishlist
            </Row>
          </Col>
        </div>
        <div className="bag">
          <Col>
            <Row className="d-flex justify-content-center">
            <ion-icon name="briefcase-outline"></ion-icon>
            </Row>
            <Row className="navbar-icon-text d-flex justify-content-center">
              Bag
            </Row>
          </Col>
        </div>
      </Navbar>
      </div>
       
       
       
            );
    }
}
export default Navigationbar;