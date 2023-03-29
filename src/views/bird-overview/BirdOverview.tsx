import React from 'react';
import {IBird} from "../../common/models/bird.model";
import BirdListItem from "./bird-list-item/BirdListItem";
import "./BirdOverview.styles.css";

interface BirdOverviewProps {
    birds: IBird[]
}

const BirdOverview: React.FC<BirdOverviewProps> = ({birds}) => {

    return (
        <div>
            <h1>Bird Team:</h1>
            <p>Emu bird</p>

            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Wingspan</th>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                    {birds.map(b => {
                        return (
                            <BirdListItem bird={b}></BirdListItem>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BirdOverview;