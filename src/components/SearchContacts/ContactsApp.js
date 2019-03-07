import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from "./SearchBar";
import ContactsList from "./ContactList"
import 'whatwg-fetch'

// const contacts=[
//     {
//         "name":"Cassio Zen",
//         "email":"cassio zen@gamil.com"
//     },
//     {
//         "name":"Dan Abramov",
//         "email":"daeron@somewhere.com"
//     },
//     {
//         "name":"Pete Hunt",
//         "email":"floydophone@somewhere.com"
//     },
//     {
//         "name":"Paul O'Shannessly",
//         "email":"zpao@gmail.com"
//     }
// ];


class ContactsApp extends React.Component{
    constructor(){
        super();
        this.state={
            contacts: [],
            filterText:''
        }
    }
    handleUserInput(value){

        this.setState({
            filterText:value
        })
    }


    componentDidMount() {
        fetch('/contact.json')
            .then(res=>res.json())
            .then(data=>{
              //  console.log(data)
                this.setState({
                    contacts:data
                })
            })

    }

    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText}
                           onUserInput={this.handleUserInput.bind((this))}
                />
                <ContactsList contacts={this.state.contacts}
                              filterText={this.state.filterText}
                />
            </div>
        )
    }

}

ContactsApp.propTypes={
    contacts:PropTypes.arrayOf(PropTypes.Object),
    filterText:PropTypes.string
};


export  default  ContactsApp;