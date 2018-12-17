import React, { Component } from "react";
import logo from "./logo1.png";
import "./App.css";
import Modal from "./Modal.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      pageClicks: 0
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handlePageClick = () => {
    this.setState({
      pageClicks: this.state.pageClicks + 1
    });
  };

  render() {
    return (
      <div className="App" onClick={this.handlePageClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>AK at BeautifulCode is good at React!</p>
          <p>
            {" "}
            To ask him questions please{" "}
            <button onClick={this.toggleModal}>Cick here!</button>
          </p>
          <p>Total number of Page Clicks so far {this.state.pageClicks} </p>
        </header>
        {this.state.showModal && (
          <Modal>
            <p>This would send an Email to AK. Are you sure?</p>
            <div className="buttons">
              <button onClick={this.toggleModal}>Yes</button>
              <button onClick={this.toggleModal}>No</button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
