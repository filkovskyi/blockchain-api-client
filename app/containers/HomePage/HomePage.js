import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends Component {
  componentDidMount() {
    const { onFetchBlock } = this.props;
    onFetchBlock();
  }

  render() {
    const repoListProps = {
      block: this.props.block,
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
          <div>
            <div>block_index: {repoListProps.block.block_index}</div>
            <div>height: {repoListProps.block.height}</div>
            <div>size: {repoListProps.block.size}</div>
            <div>time: {repoListProps.block.time}</div>
            <hr />
            <button
              onClick={() => {
                this.props.onFetchBlockHash(this.props.block.next_block[0]);
              }}
            >
              Next block
            </button>

            <button
              onClick={() => {
                this.props.onFetchBlockHash(this.props.block.prev_block);
              }}
            >
              Prev block
            </button>
          </div>
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
