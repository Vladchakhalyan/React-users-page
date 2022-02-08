import React from 'react';
import Post from '../Post/Post';
import m from '../ProfileInfo/ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreatre, recuired } from '../../common/validators/validator';
import { Textarea } from '../../common/FormsControls/formscontrols';

const MyPosts = React.memo((props) => {
  console.log('RENDER');
  let Ofmsg = props.mymsg.map((pst) => {
    return <Post img={pst.img} like={pst.like} msg={pst.msg} id={pst.id} />;
  });

  let addNewText = (values) => {
    return props.add(values.textarea);
  };

  return (
    <div className={m.mypost}>
      <h2>
        <b>My posts</b>
      </h2>
      <TextareaForm onSubmit={addNewText} />
      <h2>
        <b>New Posts</b>
      </h2>
      <div className='posts'>{Ofmsg}</div>
    </div>
  );
});

let MXlght30 = maxLengthCreatre(30);

const FormTeaxtarea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'textarea'}
        component={Textarea}
        validate={[recuired, MXlght30]}
        placeholder={'Posts'}
      />
      <button className={m.button}>
        <b>add text</b>
      </button>
    </form>
  );
};

const TextareaForm = reduxForm({
  form: 'textarea',
})(FormTeaxtarea);

export default MyPosts;
