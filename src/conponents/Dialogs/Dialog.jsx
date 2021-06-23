import React from "react";
import d from "./Dialog.module.css";
import Dialogitem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message.jsx";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreatre, recuired } from "../common/validators/validator";
import { Textarea } from "../common/FormsControls/formscontrols";

let Dialog = (props) => {
  let addNewText = (values) => {
    return props.AddF(values.textarea);
  };

  return (
    <div className={d.item}>
      <div className={d.item2}>
        <h1>MESSAGE</h1>
        <div className={d.item3}>
          <div className={d.dialogs}>
            {props.person.map((item) => {
              return <Dialogitem name={item.name} id={item.id} />;
            })}
          </div>
          <div className={d.message}>
            {props.messages.map((ms) => {
              return <Message name={ms.msg} />;
            })}
          </div>
        </div>
        <TextareaForm onSubmit={addNewText} />
      </div>
    </div>
  );
};

let MXlght10 = maxLengthCreatre(10);

const FormTeaxtarea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"textarea"}
        component={Textarea}
        validate={[recuired, MXlght10]}
        placeholder={"Massages"}
      />
      <button className={d.button}>
        <b> add</b>
      </button>
    </form>
  );
};
const TextareaForm = reduxForm({
  form: "textarea",
})(FormTeaxtarea);

export default Dialog;
