import React from 'react';
import {BooksContainer} from "./containers/books";
import {TopicSelectorContainer} from './containers/topicselector';
import {DisplayContainer} from "./containers/displayMode";
import {History} from "./components/history";


export  const BooksSearch=()=>{
    return(
        <div>
            <div>
                <TopicSelectorContainer/>
                <DisplayContainer/>
                <History/>
            </div>
            <BooksContainer/>
        </div>
    )
}




