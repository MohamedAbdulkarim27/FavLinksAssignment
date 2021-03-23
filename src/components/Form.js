import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {
           name: "",
           url:"",
       };

    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label htmlFor="name">

                </label>
                <input type = "text" id="name" name = "name"/>
                <label htmlFor="name">

                 </label>
                <input type = "text" id="url" url = "url"/>
            </form>
        )
    
    }
}

export default Form;
