import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardTitle, Table } from 'reactstrap';
import CopyLinkButton from "./CopyLinkButton"
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock"


const DocsCard = ({ title, route, description, method, md }) => {
    const url = `https://stellar-api-4c4337d94ef4.herokuapp.com${route}`
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        import(`${md}`)
            .then(res => {
                fetch(res.default)
                    .then(resp => resp.text())
                    .then(resText => setMarkdown(resText))

            }).catch(e => console.log(e))
    }, [md])
    return <>
        {markdown.length ?
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm="9" >
                    <Card body>
                        <CardTitle tag="h5">
                            {title}
                        </CardTitle>
                        <Table striped>
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody className="text-start">
                                <tr>
                                    <th scope="row">
                                        URL
                                    </th>
                                    <td>
                                        <span className="me-4">
                                            {url}
                                        </span>
                                        <CopyLinkButton linkToCopy={url}>
                                            copy
                                        </CopyLinkButton>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">
                                        Description
                                    </th>
                                    <td>
                                        {description}
                                    </td>

                                </tr>
                                <tr>
                                    <th>
                                        Method
                                    </th>
                                    <td>
                                        <strong>{method}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        Example
                                    </th>
                                    <td>
                                        <ReactMarkdown components={{ code: CodeBlock }}>{markdown}</ReactMarkdown>
                                    </td>

                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row >
            : null}
    </>
}

export default DocsCard;