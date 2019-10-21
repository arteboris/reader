/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import publications from '../../server/publications.json';
import Reader from '../../components/Reader/Reader';
import Counter from '../../components/Counter/Counter';
import Controls from '../../components/Controls/Controls';

export default class App extends Component {
  state = {
    page: 0,
  };

  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string,
      pathname: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const parsed = queryString.parse(location.search);
    const searchPage = +parsed.item;
    if (searchPage >= 1 && searchPage <= publications.length) {
      this.setState({ page: searchPage - 1 });
    } else {
      this.setState({ page: 0 }, page => this.onPageChange(page));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const parsed = queryString.parse(location.search);
    const searchPage = +parsed.item;
    if (prevProps.location.search !== location.search) {
      this.setState({ page: searchPage - 1 });
    }
  }

  onPageChange = () => {
    const { page } = this.state;
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `item=${page + 1}`,
    });
  };

  handleNextPage = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      page => this.onPageChange(page),
    );
  };

  handlePrevPage = () => {
    this.setState(
      prevState => ({
        page: prevState.page - 1,
      }),
      page => this.onPageChange(page),
    );
  };

  render() {
    const { page } = this.state;
    const total = publications.length;
    return (
      <>
        <Reader items={publications} page={page} />
        <Counter page={page + 1} total={total + 1} />
        <Controls
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
          page={page}
          total={total}
        />
      </>
    );
  }
}
