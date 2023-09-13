import React from "react";
import { Form, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const Question = ({ data, isLastQ, isFirstQ, guesses, updateGuesses, currentQ, nextQ, backQ, submitExam }) => {

    function handleBackButton() {
        if (!isFirstQ()) {
            backQ()
        }
    }
    function handleNextButton() {
        if (!isLastQ()) {
            nextQ()
        }
    }
    function handleSubmitButton() {
        submitExam()
    }
    return (

        <div>
            <p>{`(${currentQ + 1})`} {data.setup_text}</p>
            <h4>{data.question_text}</h4>
            <Form>
                <FormGroup
                    row
                    tag="fieldset"
                >
                    <Col sm={10}>
                        {data.options.map((option, i) => {
                            return <FormGroup check key={i + 1}>
                                <Label >
                                    <Input
                                        name="radioOption"
                                        type="radio"
                                        onChange={() => updateGuesses(option.text)}
                                        checked={guesses && guesses.guess === option.text}
                                    />
                                    {option.text}
                                </Label>
                            </FormGroup>
                        })}
                    </Col>
                </FormGroup>
            </Form>

            <Button disabled={isFirstQ()} onClick={handleBackButton} className="me-2">back</Button>
            {isLastQ()
                ?
                <Button onClick={handleSubmitButton}>submit</Button>
                :
                <Button onClick={handleNextButton}>next</Button>}
        </div>
    )
}

export default Question