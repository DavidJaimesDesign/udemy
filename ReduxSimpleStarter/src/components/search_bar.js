import React, {Component} from 'react';
//lets talk about state for a second
//State is a plain javascript object that is used to record and react to user event s each class based component has its own state object whenever the state changes it rerenders
//along with all it's children

class SearchBar extends Component {
    //only classes have state using constructor this is called automaticall when the instance of the class is created
    //it initializes variables
    constructor(props) {
        super(props);//component already has a constructor method we can call the method from the parent using super

        this.state = {term: ''}//whenever we use state we initilize it by creating an object and assigning it to this.state, the object will have things we want to record
    }    
    render() {
        //onChange is a default react event handler and let's you do some pretty cool stuff
        return (
            <div> 
                <input
                    value = {this.state.term}
                    onChange={event => this.setState({ term: event.target.value})}
                />
            </div>
        );
    }
}

export default SearchBar;
