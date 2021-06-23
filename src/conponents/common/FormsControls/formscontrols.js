import React from "react";
import s from "./formscontrols.module.css";

const FormControl = ({ input, meta, ...props }) => {
  const hasErorr = meta.touched && meta.error;
  return (
    <div className={s.FormC + " " + (hasErorr ? s.error : "")}>
      <div>{props.children}</div>
      {hasErorr && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restprops } = props;
  return (
    <FormControl {...props} className={s.textarea}>
      <textarea {...input} {...restprops} />{" "}
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restprops } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restprops} />{" "}
    </FormControl>
  );
};
