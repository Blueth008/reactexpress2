import React from 'react';
import PropTypes from "prop-types"

class ContactsList extends React.Component{
    render(){
        var filterContacts = this.props.contacts.filter(
            content=>content.name.indexOf(this.props.filterText) !==-1
        );

        return(
            <ul>
                { filterContacts.map(
                    contact=><li key={contact.name}>{contact.name} - {contact.email}</li>
                )}
            </ul>
        )
    }
}

ContactsList.propTypes={
    contacts:PropTypes.arrayOf(PropTypes.object),
    filterText:PropTypes.string.isRequired
};

export  default ContactsList;


