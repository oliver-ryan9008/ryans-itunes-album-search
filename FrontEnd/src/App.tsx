import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
// import { callBackendAPI } from './data-access/apiUtils';

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => {
        const result = JSON.parse(res.data);
        this.setState({ data: result.slip.advice });
      })
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/advice');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  renderData = () => {
    const { data } = this.state;
    if (!data) return null;

    return (
      <div>
        <p>Rendering....</p>
        <p>{ data }</p>
      </div>
    );
  }


  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.renderData()}
      </React.Fragment>
    );
  }
}

export default App;
