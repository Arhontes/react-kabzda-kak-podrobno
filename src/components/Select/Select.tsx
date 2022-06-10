import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './Select.module.css'

export type CityType = {
    id: string, title: string
}

function Select() {
    const cities: Array<CityType> = [
        {id: "1", title: "Moscow"},
        {id: "2", title: "Kiev"},
        {id: "3", title: "Minsk"},
        {id: "4", title: "NewYork"},
    ]

    const [value, setValue] = useState<CityType>({id: "1", title: "Moscow"})
    const [collapsed, setCollapsed] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<CityType>({id:"0", title:""})

    const onKeyUpHandler2= (e:React.KeyboardEvent<HTMLDivElement>)=>{
        const indexSearchItem = cities.find(c=>c.id===hoveredItem.id)

        if (indexSearchItem){
            const index = cities.indexOf(indexSearchItem)
            console.log(index)

                switch (e.key){
                    case "ArrowUp": {
                        console.log("press ArrowUp")
                        index-1>=0&&setHoveredItem(cities[index-1])
                    }
                        break;
                    case "ArrowDown":{
                        console.log("press ArrowDown")
                        index+1<=cities.length-1&&setHoveredItem(cities[index+1])
                    }
                        break;
                    case "Enter": onItemClickHandler(hoveredItem)
                        break;
                    default:
                        break;
                }

        }
        else {
            setHoveredItem(cities[0])
        }

    }
    const onItemClickHandler = (city: CityType) => {
        setValue(city)
        setCollapsed(!collapsed)
    }
    const isHoveredHandler = (city:CityType) => {
        setHoveredItem(city)
        console.log("change hoveredItem")
    }
    const cityList = cities.map((city, index) => <City key={city.id}
                                                       className={hoveredItem.id === city.id ? style.hovered : ""}
                                                       isHovered={() => isHoveredHandler(city)}
                                                       onClick={() => onItemClickHandler(city)}
                                                       cityTitle={city.title}/>)

    return (
        <div tabIndex={0} onKeyUp={onKeyUpHandler2}>
            <div onClick={() => setCollapsed(!collapsed)}>{value.title}</div>
            {!collapsed && cityList}
        </div>

    );
}

type CityPropsType = {
    onClick: () => void
    cityTitle: string
    isHovered: () => void
    className: string

}

function City(props: CityPropsType) {

    return (<div
        onMouseEnter={() => props.isHovered()}
        className={props.className}
        onClick={props.onClick}>{props.cityTitle}</div>)
}

export default Select;