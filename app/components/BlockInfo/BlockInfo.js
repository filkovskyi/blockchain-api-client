import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const BlockInfo = ({ block, onFetchBlockHash }) => {
  if (block !== false) {
    console.log(onFetchBlockHash);
    return (
      <div className="block-info">
        <div>
          <div>Block index: {block.block_index}</div>
          <div>Block hash: {block.hash}</div>
          <div>Height: {block.height}</div>
          <div>Size: {block.size}</div>
          <div>Time: {block.time}</div>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              onFetchBlockHash(block.next_block[0]);
            }}
          >
            Next block
          </button>

          <button
            className="btn"
            onClick={() => {
              onFetchBlockHash(block.prev_block);
            }}
          >
            Prev block
          </button>
        </div>
      </div>
    );
  }

  return null;
};

BlockInfo.propTypes = {
  block: PropTypes.any,
  onFetchBlockHash: PropTypes.func,
};

export default BlockInfo;
