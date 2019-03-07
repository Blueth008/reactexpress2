import React from 'react';

export const Book=({item,displayMode})=>{


    const LinkMarkup=(currentItem,link)=>{
        return(
            <div style={{margin:'5px'}}>
                <a href={link} >
                    {currentItem.volumeInfo.title}
                </a>
            </div>
        )
    };


    const thumbnailMarkup=(currentItem,link)=>{
        return(
            <a href={link}  style={{padding:'25px'}}>
               <img src={currentItem.volumeInfo.imageLinks.thumbnail}
                    style={{boxShadow:'2px 3px 3px #686868',marginBottom:'15px'}}/>
            </a>
        )
    };

    const link = item.volumeInfo.canonicalVolumeLink;
    //根据 displayMode 来显示不同的列表
    return displayMode === "THUMBNAIL"?
                thumbnailMarkup(item,link):LinkMarkup(item,link);

};




