import React from 'react';


export const DisplayMode=({displayMode,setThumbnail,setListing})=>{


    const styles = {
        radio: {
            marginLeft: '10px',
            cursor: 'pointer'
        },

        radiospan: {
            marginLeft: '20px',
            fontFamily: 'tahoma',
            fontSize: '16px'
        }
    };
    return(

        <span  >
           <span style={styles.radiospan}>
            Thumbnail
           </span>

          <input type="radio"
                 name="display"
                 style={styles.radio}
                 onChange={()=>setThumbnail()}
                 checked={displayMode === 'THUMBNAIL'}
                 value="thumbnail" />

          <span style={styles.radiospan}>
            List
          </span>

          <input type="radio"
                 name="display"
                 style={styles.radio}
                 onChange={()=>setListing()}
                 checked={displayMode !== 'THUMBNAIL'}
                 value="list" />
        </span>

)};



