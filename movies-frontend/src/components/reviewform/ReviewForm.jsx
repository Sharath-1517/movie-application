import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {

  const [formText, setFormText] = useState({
    textArea: ""
  });

  const onChangeFunction = (event) => {
    const{name,value} = event.target;
    setFormText(
      prevState => ({
          ...prevState,
          [name]: value
      })
    )
  }

  const onSubmission = (event) => {
    if(formText.textArea === "") {
      alert("Do not leave reviews area empty!");
      return null;
    }else {
      handleSubmit(event);
    }
  }

  return (
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={'3'} defaultValue={defaultValue} onChange={onChangeFunction} value={formText.textArea.value} name='textArea'/>
        </Form.Group>
        <Button variant='outline-info' onClick={onSubmission}>Submit Review</Button>
    </Form>
  )
}

export default ReviewForm;