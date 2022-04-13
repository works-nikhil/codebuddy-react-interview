import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function StepTwo({ nextStep, handleFormData, values }) {
  // const [step, setStep] = useState(0);

  // const handleEmailChange = () => {}

  const submitFormData = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <Form>
        <form onSubmit={submitFormData}>
          <label>
            First Name:
            <input
              type="text"
              value={values.firstName}
              onChange={e => {
                handleFormData(e, 'firstName');
              }}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={values.lastName}
              onChange={e => {
                handleFormData(e, 'lastName');
              }}
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              value={values.address}
              onChange={e => {
                handleFormData(e, 'address');
              }}
            />
          </label>
        </form>
        <Button
          onClick={e => {
            submitFormData(e);
          }}
        >
          Next
        </Button>
      </Form>
    </>
  );
}

export default StepTwo;
