import React from "react";
import { Container, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import DocsCard from "./DocsCard"

const Docs = () => {

    return <>
        <Container className="bg-light p-3 mt-3 mb-4">
            <h1>API Docs</h1>
            <DocsCard
                title={"/exam/all"}
                method={"GET"}
                route={"/exam/all"}
                description={"This route returns the id, title, description, grade level for all exams."}
                imgSRC={`${process.env.PUBLIC_URL}/images/exam_all.png`}
                md={"./MDfiles/exam_all.md"}
            />
            <DocsCard
                title={"/exam/view/:examID"}
                method={"GET"}
                route={"/exam/view/:id"}
                description={"Returns exam by id with title, description and all questions for that exam"}
                imgSRC={`${process.env.PUBLIC_URL}/images/me.JPG`}
                md={"./MDfiles/exam_view_id.md"}
            />
            <DocsCard
                title={"/score/leaders"}
                method={"GET"}
                route={"/score/leaders"}
                description={"Returns all top 10 leaders for all exams grouped by exams"}
                imgSRC={`${process.env.PUBLIC_URL}/images/me.JPG`}
                md={"./MDfiles/score_leaders.md"}
            />
            <DocsCard
                title={"/score/topTen/:examID"}
                method={"GET"}
                route={"/score/topTen/:id"}
                description={"Returns top 10 leaders for one exam filted by exam id"}
                imgSRC={`${process.env.PUBLIC_URL}/images/me.JPG`}
                md={"./MDfiles/score_topTen_id.md"}
            />
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm="9">
                    <Card body>
                        <CardTitle>Note!</CardTitle>
                        <CardText>Though there are routes for posting a new leader to the leaderboard</CardText>
                        <CardText>You will not be authorized to do so. You will need to build your own database for tracking
                            leaders</CardText>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}

export default Docs