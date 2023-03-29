import React from 'react';
import {IBird} from "../../../common/models/bird.model";

interface BirdListItemProps {
    bird: IBird
}

const BirdListItem: React.FC<BirdListItemProps> = (
    {bird}
) => {
    const {id, wingspan, name, type} = bird

    return (
            <tr>
                <td>{id}</td>
                <td>{wingspan}</td>
                <td>{name}</td>
                <td>{type}</td>
            </tr>
    );
};

export default BirdListItem;