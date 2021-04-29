import React from 'react'
import SelectableCardList from './SelectableCardList';

const RemainingTiles = (props) => {
    let { cardContents, title } = props;

    return (
        <div className="column">
            <h1 className="title">{title}</h1>
            <SelectableCardList
                contents={cardContents}
            />

        </div>
    );
}

export default RemainingTiles
