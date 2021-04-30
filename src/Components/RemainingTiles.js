import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SelectableCardList from './SelectableCardList';
import { Button, Col, Row } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;
const BASIC_TILES_NUMBER = 72;

const RemainingTiles = () => {
    const [tiles, setTiles] = useState([])
    const [tilesToShow, setTilesToShow] = useState([]);

    const showBasic = () => {
        setTilesToShow(tiles.slice(0, BASIC_TILES_NUMBER))
    }

    const showExpansions = () => {
        setTilesToShow(tiles);
    }

    useEffect(() => {
        axios.get(API)
            .then(res => {
                setTiles(res.data)
                setTilesToShow(res.data)
            })
    }, [])

    return (
        <div>
            <h1 className="title">Carcassonne AF</h1>
            <Row>
                <Col className="title">
                    <Button onClick={showBasic}>Basic</Button>
                </Col>
                <Col className="title">
                    <Button onClick={showExpansions}>With expansions</Button>
                </Col>
            </Row>
            <SelectableCardList
                contents={tilesToShow}
            />

        </div>
    );
}

export default RemainingTiles