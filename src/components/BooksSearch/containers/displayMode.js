import {connect} from 'react-redux';
import {setDisplayMode} from "../actions";
import {DisplayMode} from "../components/displayMode";

const mapStateToProps = state=>({
    displayMode:state.displayMode
});


const  mapDispatchToProps = dispatch=>({
    setListing:     ()=>{dispatch(setDisplayMode("LISTING"))},
    setThumbnail:   ()=>{dispatch(setDisplayMode("THUMBNAIL"))}
});

export  const DisplayContainer = connect(mapStateToProps,mapDispatchToProps)(DisplayMode);