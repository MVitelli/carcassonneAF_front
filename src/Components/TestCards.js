import RemainingTiles from "./RemainingTiles";
import React from 'react'

var teams = [{
    title: "FC Barcelona",
    description: "Spain"
}, {
    title: "Real Madrid",
    description: "Spain"
}, {
    title: "Bayern Munich",
    description: "Germany"
}, {
    title: "Juventus",
    description: "Italy"
}];


const TestCards = () => {
    return (
        <div>
            <RemainingTiles title="Pick a team" cardContents={teams} />
        </div>
    )
}

export default TestCards