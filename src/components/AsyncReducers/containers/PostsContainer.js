import {connect} from 'react-redux';
import {Posts} from "../components/Posts";


const mapStateToProps = state =>({
    posts : state.postsBySubreddit[state.selectedSubreddit],
    status: state.status
});

export const PostsContainer = connect(mapStateToProps,null)(Posts);
