import React from 'react';
import PropTypes from 'prop-types';


class TopicSelector extends React.Component{

     constructor(props) {
         super(props);
         this.props = props;
     }

    componentDidMount(){
       this.props.fetchTopic(this.refs.input.value);
       this.refs.input.focus();
    }

    handleChange(event){
        this.props.setTopic(event.target.value);
    };

    handleKeyPress(event){
       if(event.key === "Enter"){
           this.props.fetchTopic(event.target.value)
       }
    };


    render(){
        const styles = {
            topic: {
                marginRight: '10px',
                fontFamily: 'tahoma',
                fontSize: '18px'
            },

            input: {
                fontFamily: 'tahoma',
                fontSize: '16px',
                marginRight: '10px'
            }
        };

        const topic=this.props.topic;
        return(
            <span>
               <span style={styles.topic}>
                   Topic:
               </span>
               <input type={'text'} style={styles.input}
                      ref={'input'} defaultValue={topic}
                      onChange={this.handleChange.bind(this)}
                      onKeyPress={this.handleKeyPress.bind(this)}
               />
            </span>
        )
    }
}

TopicSelector.propTypes ={
    topic:PropTypes.string.isRequired,
    setTopic:PropTypes.func.isRequired,
    fetchTopic:PropTypes.func.isRequired
};



export {TopicSelector};