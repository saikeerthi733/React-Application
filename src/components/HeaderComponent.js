import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron ,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      isNopen:false
    };
    this.toggleNav=this.toggleNav.bind(this)
  }
    toggleNav() {
      this.setState({
        isNopen:!this.state.isNopen
      });
    }
  
  render() {
    return(
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick="{this.toggleNav}"/>
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="40" alt="restaurent">
              </img>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNopen} navbar>
            <Nav navbar>
              <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span></NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span></NavLink></NavItem>
               <NavItem> <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg"></span></NavLink></NavItem>
            <NavItem> <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span></NavLink></NavItem>



            </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </div>
    );
  }
}

export default Header;