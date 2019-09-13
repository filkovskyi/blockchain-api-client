import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';

const ReposList = ({ block }) => {
  if (block !== false) {
    return <List items={block.tx} />;
  }

  return null;
};

ReposList.propTypes = {
  block: PropTypes.any,
};

export default ReposList;
