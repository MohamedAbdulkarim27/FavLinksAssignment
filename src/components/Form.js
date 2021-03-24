import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {
           name: '',
           url: '',
       };
this.handleChange = this.handleChange.bind(this);
this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = (event) => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({
           [event.target.name]: event.target.value,

       });
    };

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
      

            this.props.handleSubmit(this.state);
            this.setState({
                name: '',
                URL: '',
            });
        };
    

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label htmlFor="name" id='name'>
                Name
                </label>
                <input type = 'text' 
                name = 'name'
                value= {this.state.name}
                onChange={(event) => this.handleChange(event)}
                />
                <label htmlFor="URL">
                Url
                 </label>
                <input
                 type = 'text' 
                  name = 'URL'
                  value={this.state.URL}
                  onChange={(event) => this.handleChange(event)}
                  />
                  <button onClick ={(event) =>this.onFormSubmit(event)}>Add</button>
                  
            </form>
        );
}
    
    
}

export default Form;
