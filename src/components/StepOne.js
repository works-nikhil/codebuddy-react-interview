// import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function StepOne({ nextStep, handleFormData, values }) {
  // const [step, setStep] = useState(0);

  // const handleEmailChange = () => {}

  const submitFormData = e => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values }),
    };
    fetch('https://codebuddy.review/submit', requestOptions).then(response =>
      console.log(response),
    );
    // nextStep();
    // API CALL
  };

  return (
    <>
      <Form>
        <form onSubmit={submitFormData}>
          <select
            value={values.countryCode}
            onChange={e => {
              handleFormData(e, 'countryCode');
            }}
          >
            <option value="+91">India(+91)</option>
            <option value="+1">America(+1)</option>
          </select>
          <label>
            Phone Number:
            <input
              type="text"
              value={values.phoneNumber}
              onChange={e => {
                handleFormData(e, 'phoneNumber');
              }}
            />
          </label>
          <label>
            Accept terms and conditions:
            <input
              name=""
              type="checkbox"
              checked={values.acceptTermsAndCondition}
              onChange={e => {
                handleFormData(e, 'acceptTermsAndCondition');
              }}
            />
          </label>
        </form>
        <Button
          onClick={e => {
            submitFormData(e);
          }}
        >
          Save and submit
        </Button>
      </Form>
    </>
  );
}

export default StepOne;
