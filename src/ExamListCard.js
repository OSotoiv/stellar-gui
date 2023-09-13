import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import StellarApi from "./StellarAPI"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import convertToClockTime from "./clockTime"

const ExamListCard = ({ exam }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);

    const [topTen, setTopTen] = useState();

    useEffect(() => {
        async function getTopTen(id) {
            const { topTen: leaders } = await StellarApi.getTopTen(id)
            setTopTen(leaders)
        }
        if (modal) {
            getTopTen(exam.id)
        }
    }, [modal, exam.id])
    return <>
        <Col className="mb-2">
            <Card
                style={{
                    width: '18rem'
                }}
                key={exam.id}
                className=""
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {exam.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Grade Levle: {exam.grade_level}
                    </CardSubtitle>
                    <CardText>
                        {exam.description}
                    </CardText>

                    <Button className="btn-sm me-2" color="secondary" onClick={toggle}>
                        Top Ten
                    </Button>


                    <Button className="btn-sm" color="secondary" onClick={toggle2}>
                        Take Exam
                    </Button>
                </CardBody>
            </Card >
        </Col>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{exam.title} Top Ten</ModalHeader>
            <ModalBody>
                {topTen ?
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Rank
                                </th>
                                <th>
                                    Username
                                </th>
                                <th>
                                    Grade
                                </th>
                                <th>
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topTen.map((user, i) => {
                                return <tr key={user.id}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        {user.exam_score}
                                    </td>
                                    <td>
                                        {convertToClockTime(user.exam_time)}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                    : null
                }
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
        </Modal>
        <Modal isOpen={modal2} toggle={toggle2}>
            <ModalHeader toggle={toggle2}>{exam.title}</ModalHeader>
            <ModalBody>
                You are about to take the "{exam.title}" exam.
                The exam is timed and calculated with your score.
                But feel free to take all the time you need.
                You will recive your score after you submit the exam.
                If your score is in the top ten for {exam.title}, you will have the opertunity to
                submit a username of your choice to recored your score. If you choose not to recored your score
                simply hit exit after viewing your score.
                Good Luck!
            </ModalBody>
            <ModalFooter>
                <NavLink className={'btn btn-sm btn-secondary me-2'} to={`/startExam/${exam.id}`}>
                    Start
                </NavLink>
            </ModalFooter>
        </Modal>
    </>
}

export default ExamListCard;