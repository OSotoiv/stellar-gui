import React, { useEffect, useState } from "react";
import StellarApi from "./StellarAPI";
import LeaderCard from "./LeaderCard"
import { Container, Row, NavItem, Nav } from "reactstrap";
import SearchBar from "./Searchbar";

const Leaderboard = () => {
    const [allLeaders, setLeaders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //get leaderboard data
    useEffect(() => {
        async function getAllLeaders() {
            const { leaders } = await StellarApi.allLeaders();
            setLeaders(leaders)
        }
        getAllLeaders();
    }, [])

    return (
        <Container className="mt-3 bg-light" >
            <Nav fill>
                <NavItem className="col-4">
                </NavItem>
                <NavItem className="col-4">
                    <h1>Leaderboards</h1>
                </NavItem>
                <NavItem className="col-4">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </NavItem>
            </Nav>
            <Row>
                {allLeaders.length
                    ?
                    searchTerm.length > 0
                        ?
                        allLeaders.reduce((acc, l) => {
                            if (l.exam_title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                acc.push(<LeaderCard key={l.exam_id} leaders={l} />)
                            }
                            return acc;
                        }, [])
                        :
                        allLeaders.map(l => <LeaderCard key={l.exam_id} leaders={l} />)
                    :
                    null
                }
            </Row>
        </Container>

    )
}

export default Leaderboard