import React, { Component } from 'react';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CategoryList from '../components/CategoryList';

import { buildArr } from '../utils/helpers';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryObj: null,
      results: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const query = e.target.value;
    if (query.length < 2) {
      return;
    }

    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=allcategories&gacprefix=${query}&prop=info`)
    .then((resp) => {
      return resp.json();
    })
    .then((result) => {
      this.setState({ 
        queryObj: result,
        results: buildArr(result.query.pages)
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="ui grid">
        <div className="row">
          <div className="ui four column centered grid">
            <Header />
          </div>
        </div>

        <div className="centered row">
          <div className="ui four colum wide">
            <SearchBox
              handleSearch={this.handleSearch}
            />
          </div>
        </div>

        <div className="centered row">
          <div className="ui eight colum wide">
            { this.state.results.length ?
              <CategoryList
                categories={this.state.results}
              />
              :
              ''
            }
          </div>
        </div>

      </div>
    );
  }
}

export default AppContainer;
