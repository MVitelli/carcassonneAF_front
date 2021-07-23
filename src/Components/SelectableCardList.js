import React, { useState } from 'react'
import SelectableCard from './SelectableCard';

const SelectableCardList = (props) => {
    const { contents, zoom } = props;

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
                <img width={!zoom && "100px"} height={!zoom && "100px"} alt={`Tile_${number}`} src={image}></img>
            </SelectableCard>
        );
    });
    return (<div>{content}</div>);

}

export default SelectableCardList