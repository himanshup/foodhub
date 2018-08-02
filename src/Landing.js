import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebaseAuth";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Jumbotron,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      email: "",
      password: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    document.title = "Welcome";
    document.body.style =
      "background: url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=719292378935d0f9168f11f9ad00558d&auto=format&fit=crop&w=1567&q=80) no-repeat center center fixed; background-size: cover;";
  }

  componentWillUnmount() {
    document.body.style = "background: #f7f7f7;";
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
    this.setState({
      email: "",
      password: ""
    });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleInputEmail1">Email</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Password</Label>
                <Input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button type="submit" onClick={this.login} color="danger">
                Sign In
              </Button>{" "}
            </Link>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modal2} toggle={this.toggle2}>
          <ModalHeader toggle={this.toggle2}>Register</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleInputEmail1">Name</Label>
                <Input
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="name"
                  name="name"
                  className="form-control"
                  id="newName"
                  placeholder="Enter your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Email</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="newEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Password</Label>
                <Input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Street Address</Label>
                <Input
                  value={this.state.address}
                  onChange={this.handleChange}
                  type="address"
                  name="address"
                  className="form-control"
                  id="newAddress"
                  placeHolder="Enter Street Address"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">City</Label>
                <Input
                  value={this.state.city}
                  onChange={this.handleChange}
                  type="city"
                  name="city"
                  className="form-control"
                  id="newCity"
                  placeHolder="City"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">State</Label>
                <Input
                  value={this.state.state}
                  onChange={this.handleChange}
                  type="state"
                  name="state"
                  className="form-control"
                  id="newState"
                  placeHolder="State"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword1">Zipcode</Label>
                <Input
                  value={this.state.zip}
                  onChange={this.handleChange}
                  type="zip"
                  name="zip"
                  className="form-control"
                  id="newZip"
                  placeHolder="Zipcode"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button onClick={this.signup} color="danger">
                Register
              </Button>
            </Link>
            <Button color="secondary" onClick={this.toggle2}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Jumbotron style={{ background: "transparent" }}>
          <h1 className="display-1 text-center text-light">Welcome!</h1>
          <p className="lead text-center">
            <Button color="danger" size="lg" onClick={this.toggle}>
              Sign In
            </Button>{" "}
            <Button color="dark" size="lg" onClick={this.toggle2}>
              Register
            </Button>
          </p>
        </Jumbotron>
      </Container>
    );
  }
}
export default Landing;
