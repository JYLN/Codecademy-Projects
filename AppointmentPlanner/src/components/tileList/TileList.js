import React from 'react';

import { Tile } from '../tile/Tile';

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map((tile, i) => {
        const { name, ...description } = tile;
        return <Tile key={i} name={name} description={description} />;
      })}
    </div>
  );
};
