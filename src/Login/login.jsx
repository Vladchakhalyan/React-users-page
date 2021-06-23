import React from "react";
import { Field, reduxForm } from "redux-form";
import { recuired } from "../conponents/common/validators/validator";
import { Input } from "../conponents/common/FormsControls/formscontrols";
import { authLoginPAge } from "../redux/authPage";
import { connect } from "react-redux";
import s from ".././conponents/common/FormsControls/formscontrols.module.css";
import { Redirect } from "react-router-dom";
import "./login.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[recuired]}
          class={"input"}
        />
      </div>
      <div>
        {" "}
        <Field
          class={"input"}
          placeholder={"password"}
          name={"password"}
          component={Input}
          validate={[recuired]}
          type={"password"}
        />
      </div>
      <div className={s.errorform}>{props.error}</div>
      <div className={s.rmb}>
        {" "}
        <Field
          type={"checkbox"}
          component={Input}
          validate={[recuired]}
          name={"rememberMe"}
        />
        remember me
      </div>
      <div>
        {" "}
        <button className={s.button}> login </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.authLoginPAge(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.login}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToPropss = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToPropss, { authLoginPAge })(Login);
