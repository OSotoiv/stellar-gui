import React from 'react';
import { Input, FormGroup, Button, InputGroup, } from 'reactstrap';


const SearchBar = ({ searchTerm, setSearchTerm }) => {

    return (
        <FormGroup className='mt-2' style={{ width: "80%" }}>
            <InputGroup size="sm">
                <Input
                    type="text"
                    placeholder="Search By Title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button color="danger" onClick={(e) => setSearchTerm("")}>clear</Button>
            </InputGroup>


        </FormGroup>
    );
};

export default SearchBar;
