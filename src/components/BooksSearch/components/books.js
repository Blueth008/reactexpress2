import React from 'react';
import {Book} from "./book";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export const Books=({books,displayMode,currentStatus})=>{


    const Spinner=()=>(
        <div style={{width:'100%'}}>
            <img src={require("../../../images/spinner.gif" )}
                 role="presentation" />
        </div>
    );

    let booksItems = (<span>No Items</span>);
    let components = null;
    if(books.length > 0) {
        components = books.map((item)=>{
            if(item.volumeInfo.imageLinks){
                //区分列表和图框的key 方便进行 diff
                const  key= displayMode ==="THUMBNAIL"? item.id+1 :item.id;
                  booksItems=(
                      <Book key={key}
                            displayMode={displayMode}
                            item={item}
                  />)
            }
            return booksItems;
        });

    }

console.log(currentStatus);

    return(
        <div style={{margin:'10px'}}>
            { currentStatus !== 'Fetching...' ?  null : <Spinner /> }

            <div style={{width:'100%'}}>
                <ReactCSSTransitionGroup transitionName="books"
                                         transitionLeaveTimeout={1}
                                         transitionEnterTimeout={1000}>
                     {components}
                </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}
