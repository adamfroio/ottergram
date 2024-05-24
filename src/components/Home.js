import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Thumbnail from './Thumbnail.js';
import { itemImages } from '../items/data.js';
import ItemType from '../types/item.js';

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail key={item.itemId} image={itemImages[item.imageId]} title={item.title} />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired
};

export default Home;
