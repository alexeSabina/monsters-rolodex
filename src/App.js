import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({monsters: users}));
	}

	handleChange = (e) => {
		this.setState({searchField: e.target.value});
	}

	render() {
		const { monsters, searchField } = this.state;
		// the above is the same with
		// const monsters = this.state.monsters;
		// const searchField = this.state.searchField;
		const filteredMonsters = monsters.filter(monster =>
				monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
			)
		return (
			<div className="App">
				{/* <input type='search' placeholder='search monsters' onChange={e => this.setState({searchField: e.target.value})} /> */}
				<h1>Monsters Rolodex</h1>
				<SearchBox 
					placeholder='search monsters'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
