import React from "react";
import { Card, CardBody, CardTitle, Table, Col } from 'reactstrap'
import convertToClockTime from "./clockTime";


const LeaderCard = ({ leaders }) => {

    return <Col >
        <Card
            style={{
                width: '25rem'
            }}
            key={leaders.exam_id}
            className="mb-2"
        >
            <CardBody>
                <CardTitle tag="h5">
                    {leaders.exam_title}
                </CardTitle>
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
                                Score
                            </th>
                            <th>
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaders.top_ten.map((user, i) => {
                            return <tr key={i + 1}>
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
            </CardBody>
        </Card >
    </Col>
}

export default LeaderCard;