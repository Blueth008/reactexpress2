import {connect} from 'react-redux';
import {Picker} from "../components/Picker";
import {selectSubreddit, shouldFetchPost} from "../action";

const mapStateToProps = state=>({
    value:      state.selectedSubreddit,
    options:    ['reactjs', 'frontend'],
    times:      state.postsBySubreddit[state.selectedSubreddit]||''
});

const mapDispatchToProps = dispatch =>({
    onChange: (value)=>{dispatch(selectSubreddit(value))},
    onClick:()=>{dispatch(shouldFetchPost())}
});

export  const PickerContainer=connect(mapStateToProps,mapDispatchToProps)(Picker);