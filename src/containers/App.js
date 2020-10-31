import React, { useEffect } from "react";
import { connect } from "react-redux";

import { CardList } from "../components/card-list/card-list.component";
import { SearchBox } from "../components/search-box/search-box.component";
import "./styles.css";

import { setSearchField, setMonsters } from "../action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
    monsters: state.monsters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    setMonsters: (data) => dispatch(setMonsters(data))
  };
};

function App(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     monsters: [],
  //     searchField: ""
  //   };
  // }

  const { monsters, setMonsters, searchField, onSearchChange } = props;

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monsters: users }));
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !monsters.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
