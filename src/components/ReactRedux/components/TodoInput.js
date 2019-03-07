import React from 'react';
import PropTypes from 'prop-types'

export class TodoInput extends React.Component{

    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    };

    state={
        text:   this.props.text || ""
    };

    handleChange=(event)=>{
        this.setState({
            text:  event.target.value
        })
    };

    handleBlur=(event)=>{
        if (!this.props.newTodo)
            this.props.onSave(event.target.value);

    };

    handleSubmit=(e)=>{
      const text =e.target.value.trim();
      if(e.which === 13) {
          this.props.onSave(text);
          if (this.props.newTodo) {
              this.setState({ text: '' })
          }
      }
    };

    render(){
        return(
            <input  type='text'
                    // placeholder={this.props.placeholder}
                    autoFocus={true}
                    value={this.state.text}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyPress={this.handleSubmit}

            />
        )
    }

}
