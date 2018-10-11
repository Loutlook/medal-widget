import React, { Component } from 'react';
import WidgetTable from './components/widget-table';
import './App.css';

const SEC_SORT_MAP = {
  gold: "silver",
  silver: "gold",
  bronze: "gold",
  total: "gold"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };

    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    fetch("https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json")
      .then(res => res.json())
      .then(
        result => {
          result = result.sort((a, b) => a.code > b.code ? 1 : -1);
          this.setState({
            isLoaded: true,
            data: result.map((row, index) => {
              row.total = row.gold + row.silver + row.bronze;
              row.contryAlphaRank = index;
              return row;
            }),
          })
          this.sortBy(this.props.sort);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  sortBy(key) {
    this.setState({
      data: this.state.data.sort(
        (a, b) =>
          (parseInt(b[key]) - parseInt(a[key])) ?
            (parseInt(b[key]) - parseInt(a[key])) :
            (parseInt(b[SEC_SORT_MAP[key]]) - parseInt(a[SEC_SORT_MAP[key]]))
      )
    });
  }

  render() {
    return (
      <div className="App">
        <WidgetTable
          error={this.state.error}
          isLoaded={this.state.isLoaded}
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    );
  }
}

export default App;