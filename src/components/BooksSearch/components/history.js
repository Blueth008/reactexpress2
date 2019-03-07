import React from 'react';

export const History=({past,present,future,undo,redo,gotoState})=>{

    const RightArrow=()=>(
        <a href={'#'} style={{ textDecoration: 'none' }}
           onClick={()=>redo()}   //前进
        >
             &#8594
        </a>
    );

    const LeftArrow = ()=>(
        <a href={'#'} style={{ textDecoration: 'none' }}
           onClick={()=>undo()}   //后退
        >
           &#8592
        </a>
    );

    const max =() =>(past ? past.length :0 )+ (present ? 1: 0 )+
               (future ? future.length : 0) -1;
    const  value =() =>past ? past.length : 0;

    return(
        <span style={{margin:'20px',cursor:'pointer'}}>
                History
            <input type={'range'} style={{cursor:'pointer'}}
                   min={0} max={max()}  value={value()}
                    onChange={event =>gotoState(event.target.value) }  //获取当前数字 然后在 gotoState进行操作
            />
            {  (past && past.length > 0) ? <LeftArrow/>: null  }
            {  (future && future.length > 0) ? <RightArrow/>: null  }
        </span>
    )
}







