import React from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: null
    };
  }

  async componentDidMount() {
    try {
      const response = await this.fetchData();
      if (!response) {
        throw Error(response.statusText);
      }
      const json = await response.data;
      this.setState({ profile: json.profile });
    } catch (error) {
      console.log(error);
    }
  }

  async fetchData() {
    return axios.get('http://localhost:3000/data/data.json');
  }

  render() {
    if (!this.state.profile) return null;
    return (
      <div className="main">
        <Header
          title={this.state.profile.name}
          subTitle={this.state.profile.role}
          text={this.state.profile.description}
        />
      </div>
    );
  }
}

export default Main;
