import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createPost } from '../../actions';

class PostCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <Message error header={error} />;
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `${meta.touched && meta.error ? 'error' : ''}`;
    const inputType = () => {
      if (input.name === 'title') {
        return <input {...input} autoComplete="off" />;
      } else {
        return <textarea {...input} autoComplete="off" />;
      }
    };
    return (
      <Form.Field className={className}>
        <label>{label}</label>
        {inputType()}
        {this.renderError(meta)}
      </Form.Field>
    );
  };

  onFormSubmit = formValues => {
    const id = new Date().getTime();
    const newFormValues = { ...formValues, id };
    this.props.createPost(newFormValues);
  };

  render() {
    return (
      <Form error onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="body" component={this.renderInput} label="Enter Content" />
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = 'You must enter a title';
  }
  if (!formValues.body) {
    error.body = 'You must enter a content';
  }
  return error;
};

const reduxFormWrapped = reduxForm({
  form: 'postCreate',
  validate
})(PostCreate);

export default connect(
  null,
  { createPost }
)(reduxFormWrapped);
