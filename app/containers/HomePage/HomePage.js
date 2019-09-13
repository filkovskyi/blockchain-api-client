import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { onFetchBlock } = this.props;
    onFetchBlock();

    console.log(this.props)
  }

  render() {
    const repoListProps = {
      block: this.props.block,
    };
    console.log(repoListProps.block);
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
              onClick={e => {
                console.log(repoListProps.block.next_block);
              }}
            >
              next block
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
};
