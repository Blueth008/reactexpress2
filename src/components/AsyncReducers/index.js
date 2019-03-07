import React from 'react';
import {PickerContainer} from "./containers/PickerContainer";
import {PostsContainer} from "./containers/PostsContainer";
import {storeAsync} from "./store";
import {Provider} from "react-redux";

export const AppAsync = ()=>(
    <Provider store={storeAsync}>
        <PickerContainer/>
        <PostsContainer/>
    </Provider>
);



