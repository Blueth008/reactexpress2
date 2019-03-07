import {connect} from 'react-redux';
import {TopicSelector} from "../components/topicselector";
import {fetchBooks, setTopic} from "../actions";

const mapStateToProps = state=>({
    topic:state.topic
});

const mapDispatchToProps = dispatch=>({
    setTopic:    topic =>{ dispatch(setTopic(topic)) } ,
    fetchTopic:  topic => {
        dispatch(setTopic(topic));
        dispatch(fetchBooks()) //获取图书信息
    }
});

export const TopicSelectorContainer=connect(mapStateToProps,mapDispatchToProps)(TopicSelector);






