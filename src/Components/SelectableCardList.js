import React, { useState } from 'react'
import SelectableCard from './SelectableCard';

const SelectableCardList = (props) => {
    const { contents } = props;
    
    const [tilesSelected, setTilesSelected] = useState([])

    const handleClick = (event) => {
        let tileId = event.currentTarget.id;
        if (tilesSelected.includes(tileId)) {
            setTilesSelected(tilesSelected.filter(id => id !== tileId))
        }
        else {
            setTilesSelected([...tilesSelected, tileId])
        }
    }

    const content = contents && contents.map((cardContent, i) => {
        let { number, image } = cardContent;
        return (
            <SelectableCard
                key={i}
                id={number}
                selected={tilesSelected.includes(number.toString())}
                onClick={handleClick}
            >
                <img src={image}></img>
            </SelectableCard>
        );
    });
    return (<div>{content}</div>);

}

export default SelectableCardList