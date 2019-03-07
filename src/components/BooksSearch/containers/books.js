import {connect} from 'react-redux';
import {Books} from "../components/books";

const mapStateToProps = state=>({
    books:          state.books,
    currentStatus:  state.currentStatus,
    displayMode:    state.displayMode

});

export const BooksContainer = connect(mapStateToProps,null)(Books);
