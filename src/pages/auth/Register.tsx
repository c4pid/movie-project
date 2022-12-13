import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Container className="mv-auth-form">
      <div className="mb-5 text-center">
        <h1 className="mv-auth-title ">welcome to netflix</h1>
      </div>
      <Form
      // onSubmit={handleSubmit}
      >
        <FormGroup className="mv-auth-input">
          <FormControl
            // value={}
            // onChange={(e: any) => setEmail(e.target.value)}
            required
            type="text"
            placeholder="full name"
          />
          {/* {errors?.email && (
          <Form.Text className="text-error">{errors?.email}</Form.Text>
        )} */}
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            value={phoneNumber}
            onChange={(e) => {
              if (e.target.value && !/[0-9]/.test(e.target.value)) {
                e.preventDefault();
              } else {
                setPhoneNumber(e.target.value);
              }
            }}
            required
            type="text"
            placeholder="phone number"
          />
          {/* {errors?.email && (
          <Form.Text className="text-error">{errors?.email}</Form.Text>
        )} */}
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            // value={}
            // onChange={(e: any) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="your email"
          />
          {/* {errors?.email && (
          <Form.Text className="text-error">{errors?.email}</Form.Text>
        )} */}
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            // value={}
            // onChange={(e: any) => setEmail(e.target.value)}
            required
            type="text"
            placeholder="account name"
          />
          {/* {errors?.email && (
          <Form.Text className="text-error">{errors?.email}</Form.Text>
        )} */}
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            // value={}
            // onChange={(e: any) => setEmail(e.target.value)}
            required
            type="password"
            placeholder="password"
          />
          {/* {errors?.email && (
          <Form.Text className="text-error">{errors?.email}</Form.Text>
        )} */}
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            // value={}
            // onChange={(e: any) => setEmail(e.target.value)}
            required
            type="text"
            placeholder="group code"
          />
          {/* {errors?.email && (
          <Form.Text className="text-error">{errors?.email}</Form.Text>
        )} */}
        </FormGroup>

        <Link to={ROUTES.LOGIN} className="mv-sign-up-link">
          login now
        </Link>

        <div className="text-center">
          <Button
            type="submit"
            // className="w-100"
            // disabled={loading}
          >
            <span className="mv-auth-text-btn">Register</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
