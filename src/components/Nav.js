import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import AddURL from './AddURL';
class NavBar extends React.Component {
  state = {
    isOpen: false,
  };

  onBookmarkSubmit = (url, subTopic, subject, topic, bookmarks) => {
    this.props.onBookmarkSubmit(url, subTopic, subject, topic, bookmarks);
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div className='sticky-top'>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand href='/'>
            <h3>BOOKMARK</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Form inline className='my-2 my-lg-0'>
                  <FormGroup>
                    <Input
                      type='text'
                      name='search'
                      id='navSearch'
                      placeholder='Search Bookmarks'
                      className='mr-2 form-control'
                    />
                    <Button
                      color='dark'
                      className='border-success text-success my-2 my-sm-0 mr-2'
                      href='/'
                    >
                      Search
                    </Button>
                  </FormGroup>
                </Form>
              </NavItem>
            </Nav>
            <Nav>
              <NavItem>
                <AddURL onBookmarkSubmit={this.onBookmarkSubmit} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
