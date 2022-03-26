import React from 'react';
import { Accordion } from 'react-bootstrap';

const Theory = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center fw-bold mb-3'>Theory Part</h1>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How React Works?</Accordion.Header>
                  <Accordion.Body>
                  <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript A React app usually has a single root DOM node. Rendering an Element into the DOM will change the user interface of the page.</p>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Props VS State</Accordion.Header>
                <Accordion.Body>
                  <h5>Props</h5>
                  <p>Props are read-only components. it's used to pass data from one component to another. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component. </p>
                  <h5>State</h5>
                  <p>The state is a local data storage that is local to the component only and cannot be passed to other components. It can only be accessed or modified inside the component or by the component directly.</p>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How useState Works?</Accordion.Header>
                  <Accordion.Body>
                    <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. A React component using hooks is defined using the regular JavaScript function syntax. </p>
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>                      
        </div>
    );
};

export default Theory;