import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { onFetchBlock } = this.props;
    onFetchBlock();
  }

  render() {
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
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>
              A minimal <i>React-Redux</i> boilerplate with all the best
              practices
            </p>
          </section>
          <section>
            <h2>Try me!</h2>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onFetchBlock: PropTypes.func,
};
