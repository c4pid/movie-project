import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MVLogo from "../../assets/images/logo.png";
import { ROUTES } from "../../constants";
import { userLogin } from "../../services/actions/loginAction";
import { USER_LOGIN_REQUEST } from "../../services/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(
      userLogin({
        taiKhoan: account,
        matKhau: password,
      })
    );
  };

  return (
    <Container className="mv-auth-form">
      <div className="mb-5 text-center">
        <img src={MVLogo} alt="mv-logo" className="mv-logo" />
        <h1 className="mv-auth-title">sign in</h1>
      </div>
      <Form onSubmit={handleLogin}>
        <FormGroup className="mv-auth-input">
          <FormControl
            value={account}
            onChange={(e: any) => setAccount(e.target.value)}
            required
            type="text"
            placeholder="email or your account"
          />
          {/* {errors?.email && (
            <Form.Text className="text-error">{errors?.email}</Form.Text>
          )} */}
        </FormGroup>

        <FormGroup className="mv-auth-input">
          <FormControl
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
          />
          {/* {errors?.email && (
            <Form.Text className="text-error">{errors?.email}</Form.Text>
          )} */}
        </FormGroup>

        <Link to={ROUTES.REGISTER} className="mv-sign-up-link">
          sign up now
        </Link>

        <div className="text-center">
          <Button
            type="submit"
            // className="w-100"
            // disabled={loading}
          >
            <span className="mv-auth-text-btn">Login</span>
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
