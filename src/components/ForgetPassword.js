import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input }
    from 'reactstrap';


class ForgetPassword extends Component {
    render() {
        return (
            <Form className="login-form">
                <h1>
                    <span className="font-weight-bold">Forget Password</span>
                </h1>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email" />
                </FormGroup>

                <Button className="btn-lg btn-dark btn-block">
                    Get Password
                </Button>


            </Form>
        );
    }
}

export default ForgetPassword;