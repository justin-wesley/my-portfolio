import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        "title": "Work Example",
        "image": {
            "description": "example screenshot of a project involving code",
            "src": "images/example1.png"
        }
    }, {
        "title": "Work Example",
        "image": {
            "description": "example screenshot of a project involving chemistry",
            "src": "images/example2.png"
        }
    }, {
        "title": "Work Example",
        "image": {
            "description": "example screenshot of a project involving cats",
            "src": "images/example3.png"
        }
    }

]
ReactDom.render(<ExampleWork work={myWork}/>, document.getElementById('exampleWork'))
