import React, { Component } from 'react';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CategoryList from '../components/CategoryList';
import MemberList from '../components/MemberList';

import { buildArr } from '../utils/helpers';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryObj: null,
      results: [],
      categoryMembers: [],
      currentCategory: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFetchMembers = this.handleFetchMembers.bind(this);
  }

  showMembers() {
    const members = this.state.categoryMembers;

  }
  handleFetchMembers(category) {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=categorymembers&cmtitle=${category}&cmprop=ids|title|timestamp|type`)
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        this.setState({
          categoryMembers: result.query.categorymembers,
          currentCategory: category
        });
      })
      .catch(e => console.log(e));
  }

  handleSearch(e) {
    const query = e.target.value;
    if (query.length < 3) {
      this.setState({
        results: [],
        categoryMembers: []
      });
      return;
    }

    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=allcategories&gacprefix=${query}&prop=info`)
    .then((resp) => {
      return resp.json();
    })
    .then((result) => {
      if (result.query) {
        this.setState({
          queryObj: result,
          results: buildArr(result.query.pages)
        });
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    const { results, categoryMembers, currentCategory } = this.state;
    return (
      <div className="ui grid container centered">
        <div className="row">
          <div className="ui eight column ">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="ui eight colum ">
            <SearchBox
              handleSearch={this.handleSearch}
            />
          </div>
        </div>

        <div className="row">
          <div className="ui eight colum">
            { this.state.results.length ?
              <div>
                <CategoryList
                  categories={results}
                  handleFetchMembers={this.handleFetchMembers}
                />
              </div>
              :
              ''
            }
          </div>
        </div>

        <div className="row">
          <div className="ui sixteen colum">
            { categoryMembers.length ?
              <div>
                <MemberList
                  members={categoryMembers}
                  category={currentCategory}
                />
              </div>
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
