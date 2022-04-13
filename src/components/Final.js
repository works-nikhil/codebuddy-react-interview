// import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormHome({ nextStep, handleFormData, values }) {
  // const [step, setStep] = useState(0);

  // const handleEmailChange = () => {}

  const submitFormData = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <Form>
        <form>
          <label>
            Email Address:
            <input
              type="text"
              value={values.emailId}
              onChange={e => {
                handleFormData(e, 'emailId');
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={values.password}
              onChange={e => {
                handleFormData(e, 'password');
              }}
            />
          </label>
        </form>

        <Button
          onClick={e => {
            submitFormData(e);
          }}
        >
          Next Step
        </Button>
      </Form>
    </>
  );
}

export default FormHome;
