import React from 'react';
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
       this.state ={
            favLinks : [],
        }
        this.removeCharacter = this.removeCharacter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    removeCharacter = (index) => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       let updatedFavLinks = this.state.favLinks.filter((fav,i)=>{
           return i !==index;
       });
       this.setState({
           favLinks: updatedFavLinks
       });
    };

    handleSubmit = favLink => {
       this.setState({
           favLinks: [...this.state.favLinks,favLink],
       });
    };

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table
                 linkData={this.state.favLinks}
                removeLink={this.removeCharacter}
                />
                
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;