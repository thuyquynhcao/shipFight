import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Form className="login-form">
                <h1>
                    <span className="font-weight-bold">Login</span>
                </h1>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                </FormGroup>

                <div className="options">
                    <label title="item1">
                        <input type="checkbox" name="foo" value="0" />
                        Remember me
                        <img />
                    </label>

                </div>

                <Button  className="btn-lg btn-dark btn-block">
                    Sign in
                </Button>
                <div className="text-center pt-3">New around here?
                    <Button className="btn-lg btn-dark btn-block">
                        Sign up
                    </Button>
                </div>
                <Button className="btn-lg btn-dark btn-block">
                    Forgot Password
                </Button>

            </Form>
        );
    }
}

export default Login;