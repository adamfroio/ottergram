import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { itemImages } from '../items/data.js';
import ItemType from '../types/item.js';
import Thumbnail from './Thumbnail.js';
import './Details.css';

function Details({ items }) {
  return (
    <div className="details-component">
      <Outlet />
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail key={item.itemId} image={itemImages[item.imageId]} title={item.title} />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired
};

export default Details;
