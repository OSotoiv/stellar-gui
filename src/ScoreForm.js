import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StellarApi from "./StellarAPI"
import convertToClockTime from "./clockTime";

const ScoreForm = () => {
    const location = useLocation();
    const { exam_score, exam_time, exam_id } = location.state || {};
    const passed = exam_score > 70;
    const color = passed ? 'green' : 'red'
    const [inputState, setInputState] = useState({});
    const [isTopTen, setIsTopTen] = useState(false)

    const [modal, setModal] = useState(true);
    const toggle = () => {
        setModal(!modal)
    };
    useEffect(() => {
        async function getLeaders() {
            if (passed) {
                const isLeader = await StellarApi.isTopTen(exam_id, exam_score, exam_time);
                setIsTopTen(isLeader)
            }
        }
        getLeaders()
    }, [exam_id, exam_score, exam_time, passed])

    function handleInputChange(e) {
        e.preventDefault()
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }

    async function addToLeaderboard(e) {
        e.preventDefault()
        const { username } = inputState;
        await StellarApi.addUserToLeaderboard(username, exam_score, exam_time, exam_id)
        toggle()
    }

    return <>{modal ?
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} style={{ color: color }}>Score: {exam_score}% | Time: {convertToClockTime(exam_time)}</ModalHeader>
            <ModalBody>
                {
                    passed
                        ?
                        <>
                            {isTopTen
                                ?
                                <Form onSubmit={addToLeaderboard}>
                                    <p>You Passed! Enter a username to be added to the leaderboard.</p>
                                    <FormGroup>
                                        <Label className="me-2">
                                            username
                                            <Input name="username" required onChange={handleInputChange} value={inputState.username}>
                                            </Input>
                                        </Label>
                                        <Button className="btn-sm">
                                            submit
                                        </Button>
                                    </FormGroup>
                                </Form>
                                :
                                <p>You Passed! Improve your time to get on the scoreboard!</p>
                            }
                        </>
                        :
                        <p>Dont give up try again!</p>

                }

            </ModalBody>
            <ModalFooter>
            </ModalFooter>
        </Modal>
        :
        <Navigate to={"/leaderboard"} replace />
    }
    </>
}
export default ScoreForm