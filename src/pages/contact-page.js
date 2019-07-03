import React from 'react'
import { Form, Field } from 'react-final-form'

const onSubmit = async values => {
  fetch('api/mailHandler.php', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type for post
    }),
    body: `fullname=${values.fullname}&email=${values.email}&message=${values.message}`
  }).then( function (response) {
    if(response.ok){
      return response.blob();
    }
    throw new Error('Network response error')
  });
}


const ContactPage = () => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
      const errors = {};

      if (!values.fullname) {
        errors.fullname = "You must enter a full name.";
      } else if (values.fullname.length < 8) {
        errors.fullname = "Name is invalid length";
      }

      if (!values.email) {
        errors.email = "You must enter an email address.";
      } else if (values.email.length < 8) {
        errors.email = "Email is invalid";
      }
      if (!values.message) {
        errors.message = "You must enter a message.";
      } else if (values.message.length < 10) {
        errors.message = "Message is invalid";
      }
      return errors;
    }}

    render={({ handleSubmit, form, reset, values, submitting, pristine }) => (
      <form
        onSubmit={async event => {
          await handleSubmit(event).then(form.reset)
        }}
      >
        <div className="field half">
          <Field name="fullname">
            {({ input, meta }) => {
              return (
                <div>
                  <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              );
            }}
          </Field>
        </div>
        <div className="field half">
          <Field name="email">
            {({ input, meta }) => {
              return (
                <div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      {...input}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              );
            }}
          </Field>
        </div>
        <div className="field">
          <Field name="message">
            {({ input, meta }) => {
              return (
                <div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      {...input}
                      type="textarea"
                      placeholder="Enter your message here"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              );
            }}
          </Field>
        </div>

        <div className="buttons">
          <button type="submit" disabled={submitting || pristine}>
          Submit
          </button>
          <button type="button" onClick={form.reset} disabled={submitting || pristine} >
            Reset
          </button>
        </div>

      </form>
    )}
  />
)

export default ContactPage;
