import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';

class VideoForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <Message error header={error} />;
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `${meta.touched && meta.error ? 'error' : ''}`;
    const inputType = () => {
      if (input.name === 'title' || input.name === 'videoLink') {
        return <Form.Input {...input} autoComplete="off" />;
      } else {
        return <Form.TextArea {...input} autoComplete="off" />;
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

  render() {
    return (
      <Form error onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Field
          name="videoLink"
          component={this.renderInput}
          label="Enter YouTube video ID"
        />
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
  if (!formValues.description) {
    error.description = 'You must enter a content';
  }
  if (!formValues.videoLink) {
    error.videoLink = 'You must enter a video URL';
  }
  return error;
};

export default reduxForm({
  form: 'postCreate',
  validate
})(VideoForm);
