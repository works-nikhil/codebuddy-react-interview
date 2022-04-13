import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormHome from '../components/Final';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';

const Home = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const onChange = (e, input) => {
    const { value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));

    console.log(formData, 'Test');
  };

  const returnForm = () => {
    if (step == 1) {
      return <FormHome nextStep={nextStep} handleFormData={onChange} values={formData} />;
    }

    if (step == 2) {
      return <StepTwo nextStep={nextStep} handleFormData={onChange} values={formData} />;
    }

    if (step == 3) {
      return <StepOne nextStep={nextStep} handleFormData={onChange} values={formData} />;
    }

    return <></>;
  };

  // const onSubmit = () => navigate('/posts');

  return (
    <main>
      {/* <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div> */}

      <Container>{returnForm()}</Container>
      {step > 1 ? (
        <Button
          onClick={e => {
            e.preventDefault();
            backStep();
          }}
        >
          Previous
        </Button>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Home;
