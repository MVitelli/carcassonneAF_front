import React from 'react'
import SelectableCard from './SelectableCard';

const SelectableTitleCard = (props) => {
    let { title, description, selected } = props;
    return (
        <SelectableCard onClick={props.onClick}
            selected={selected}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </div>
        </SelectableCard>
    )
}

export default SelectableTitleCard