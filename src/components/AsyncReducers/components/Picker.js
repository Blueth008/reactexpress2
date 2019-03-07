import React from 'react';


export class Picker extends React.Component {
    componentDidMount() {
       this.props.onClick();
    }

    render(){
      const  {value,onChange,options,times,onClick} =this.props;
        return(
            <div>
                <h1>{value}</h1>
                <select onChange={e=>onChange(e.target.value)} value={value}>
                    {
                        options.map(option=>(
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
                <span>Updated:{ times.lastUpdate ?times.lastUpdate:'未更新'}</span>
                <button onClick={onClick}>更新</button>
            </div>
        )
    }
}

//
// export const Picker=({value,onChange,options,times,onClick})=>{
// //value 是当前显示的  options是下拉选择框显示的
//     console.log(typeof times.lastUpdate);
//     return(
//         <div>
//             <h1>{value}</h1>
//             <select onChange={e=>onChange(e.target.value)} value={value}>
//                 {
//                     options.map(option=>(
//                         <option value={option} key={option}>
//                             {option}
//                         </option>
//                     ))
//                 }
//             </select>
//             <span>Updated:{ times.lastUpdate ?times.lastUpdate:'未更新'}</span>
//             <button onClick={onClick}>更新</button>
//         </div>
//     )
// }




