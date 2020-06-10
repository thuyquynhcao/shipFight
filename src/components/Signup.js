import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';


class Signup extends Component {
    render() {
        return (
            <Form className="signup-form">
                <h1>
                    <span className="font-weight-bold">Sign up</span>
                </h1>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input type="confirmpassword" placeholder="ConfirmPassword" />
                </FormGroup>


                <Button className="btn-lg btn-dark btn-block">
                    Register
                </Button>


            </Form>
        );
    }
}

export default Signup ;