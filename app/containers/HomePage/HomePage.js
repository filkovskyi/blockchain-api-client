import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import BlockInfo from 'components/BlockInfo';
import './style.scss';

export default class HomePage extends Component {
  componentDidMount() {
    const { onFetchBlock } = this.props;
    onFetchBlock();
  }

  render() {
    const repoListProps = {
      block: this.props.block,
      onFetchBlockHash: this.props.onFetchBlockHash,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="home-page">
          <BlockInfo {...repoListProps} />
          <ReposList {...repoListProps} />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onFetchBlock: PropTypes.func,
  onFetchBlockHash: PropTypes.func,
};
