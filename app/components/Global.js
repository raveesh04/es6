import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    render() {
        return (
         <div>
         <h2>Book Explorer!</h2>
         <FormGroup>
        <InputGroup>
        <FormControl type="text" placeholder="Search for Book"></FormControl>
    <InputGroup.Addon></InputGroup.Addon>
        </InputGroup>
        </FormGroup>
     </div>
     )
 }
}

export default  Global;