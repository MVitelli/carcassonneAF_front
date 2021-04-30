import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SelectableCardList from './SelectableCardList';

const API = process.env.REACT_APP_API_URL;

const RemainingTiles = () => {
    const [tiles, setTiles] = useState(null)

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setTiles(res.data)
            })
    }, [])

    return (
        <div>
            <h1 className="title">Carcassonne AF</h1>
            <SelectableCardList
                contents={tiles}
            />

        </div>
    );
}

export default RemainingTiles
