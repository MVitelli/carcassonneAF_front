import React, { useState } from 'react'
import SelectableTitleCard from './SelectableTitleCard';

const SelectableCardList = (props) => {
    const { contents } = props;
    const [selected, setSelected] = useState(false)

    const content = contents.map((cardContent, i) => {
        let { title, description } = cardContent;
        return (
            <SelectableTitleCard key={i}
                title={title} description={description}
                selected={selected}
                onClick={() => { setSelected(!selected) }} />
        );
    });
    return (<div className="cardlist">{content}</div>);

}

export default SelectableCardList