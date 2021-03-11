import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppartmentList from './AppartmentList'
import Searchbar from './SearchBar'
import './style.css'

const appartments = [
  {
    id: 1,
    title: 'Large Architect flat - Hypercentral 70m2',
    price: 45,
    rating: 4,
    image: 'https://a0.muscache.com/im/pictures/38626db5-6cff-41cc-9120-c4817375efb8.jpg?im_w=720',
    isAvailable: true,
  },
  {
    id: 2,
    title: 'Studio Luxe - Champs Elysées',
    price: 55,
    rating: 5,
    image: 'https://a0.muscache.com/im/pictures/99953686/da93850b_original.jpg?im_w=720',
    isAvailable: false,
  },
  {
    id: 3,
    title: 'Studio de caractère, Bastille',
    price: 36,
    rating: 3,
    image: 'https://a0.muscache.com/im/pictures/80093344/597801ae_original.jpg?im_w=720',
    isAvailable: true,
  },
  {
    id: 4,
    title: 'Beau studio à 100m du Moulin Rouge',
    price: 25,
    rating: 1,
    image: 'https://a0.muscache.com/im/pictures/ae245273-6819-44c4-af6b-7a272d54ff14.jpg?im_w=720',
    isAvailable: false,
  }
]

class App extends Component {
  state = {
    showAll: false,
    searchValue: ''
  }
  toggleShow = () => {
    this.setState({
      showAll: !this.state.showAll
    })
  }
  handleInputText = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  render () {
    const { showAll, searchValue } = this.state

    const filteredAppartments = appartments.filter(el => el.title.toLowerCase().includes(searchValue))
    const availableAppartments = showAll ? filteredAppartments : filteredAppartments.filter(el => {
      if (el.isAvailable) {
        return el
      } else {
        return false
      }
    })
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="navbar-brand">AirBnB MVP</h1>
          <Searchbar
            searchValue={searchValue}
            handleInputText={this.handleInputText}
            found={availableAppartments.length}
            total={appartments.length}
            />
        </nav>
        <button className="btn btn-light btn-sm my-2" onClick={this.toggleShow}>
          {showAll ? 'Show only available' : 'ShowAll'}
        </button><br/>
        <AppartmentList
          appartments={availableAppartments}
        />
      </div>
    )
  }
}

export default App

ReactDOM.render(<App />, document.querySelector('#app'))