import React, { useState, useEffect } from "react";
// import Question from "./Question";
import ExamListCard from "./ExamListCard"
import StellarApi from "./StellarAPI"
import { Container, Row, Nav, NavItem } from "reactstrap";
import SearchBar from "./Searchbar";


const Exams = () => {
    //call Api for exam by id

    //return first exam question. 

    // keep front end simple and make a solid backend.
    const [exams, setExams] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function getE() {
            const examList = await StellarApi.allExams();
            setExams(examList)
        }
        getE();
    }, [])
    return (
        <>
            <Container className="bg-light p-3 mt-3">
                <Nav fill>
                    <NavItem className="col-4">
                    </NavItem>
                    <NavItem className="col-4">
                        <h1>Exams</h1>
                    </NavItem>
                    <NavItem className="col-4">
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </NavItem>
                </Nav>
                <Row>
                    {exams
                        ?
                        searchTerm.length > 0
                            ?
                            exams.reduce((acc, exam) => {
                                if (exam.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    acc.push(<ExamListCard key={exam.id} exam={exam} />)
                                }
                                return acc;
                            }, [])
                            :
                            exams.map(exam => <ExamListCard key={exam.id} exam={exam} />)
                        : null}
                </Row>
            </Container>

        </>
    )
}

export default Exams;