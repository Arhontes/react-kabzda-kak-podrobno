import React, {useEffect, useState} from 'react';

function Select() {

    const [cities,setCities] = useState(["Moscow","London", "NewYork"])
    const [collapsed,setCollapsed] = useState(true)

    const changeCityList = (city:string)=>{
        setCities([city,...cities.filter(c=>c!==city)])
    }
    return (
        <div>
            <div style={{"backgroundColor": "green","display":"inline-block","minWidth":"60px"}} onClick={()=>setCollapsed(false)} onDoubleClick={()=>setCollapsed(true)}>{cities[0]}</div>
            {collapsed&&cities.map(c=><City callback={changeCityList} cityTitle={c}/>)}
        </div>


    );
}
type CityPropsTitle={
    callback: (cityTitle:string)=>void
    cityTitle:string
}
  function City(props:CityPropsTitle){
    return (
       <div style={{"backgroundColor":"lightgray","display":"block","flexDirection":"column"}} onClick={()=>props.callback(props.cityTitle)}>{props.cityTitle}</div>
    )
  }
export default Select;