import React from 'react'
import Card from './Card';

const SelectableCard = (props) => {
    let isSelected = props.selected ? "selected" : "";
    let className = "selectable " + isSelected;
    return (
        <Card>
            <div className={className} onClick={props.onClick} {...props}>
                {props.children}
                <div className="check">
                    <span className="checkmark"> ✔</span>
                </div>
            </div>
        </Card>
    )
}

export default SelectableCard
