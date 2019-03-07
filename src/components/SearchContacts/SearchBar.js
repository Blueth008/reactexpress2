import React from 'react';

class SearchBar extends React.Component{
    handleChange(event){
        this.props.onUserInput(event.target.value)
    }

    render(){
        return(
            <input type={"search"}
                   placeholder={"Search"}
                   onChange={this.handleChange.bind(this)}
                   value={this.props.filterText}
            />
        )
    }

}

export default SearchBar;