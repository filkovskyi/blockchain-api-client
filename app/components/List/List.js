import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = ({ items }) => {
  let content = <div />;

  // If we have items, render them
  if (items) {
    console.log(items);
    content = items.map(item => (
      <div key={`item-${item.tx_index}`}>
        <div>Transaction size: {item.size}</div>
        <div>Transaction time: {item.time}</div>
        <div>Transaction weight: {item.weight}</div>
        <hr />
      </div>
    ));
  }

  return (
    <div className="list-wrapper">
      <ul>{content}</ul>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
