import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: null,
      information: null
    };
  }

  async componentDidMount() {
    try {
      const response = await this.fetchData();
      if (!response) {
        throw Error(response.statusText);
      }
      const json = await response.data;
      this.setState({ profile: json.profile, information: json.information });
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
      <Router>
        <div className="main">
          <Header title={this.state.profile.name} subTitle={this.state.profile.role} />
          <div className="nav">
            <Link to="/about" className="nav-link">
              <Button label="About" />
            </Link>
            <Link to="/contact" className="nav-link">
              <Button label="Contact" />
            </Link>
          </div>
        </div>

        <Route path="/" />
        <Route
          path="/about"
          render={props => <About text={this.state.information.about} {...props} />}
        />
        <Route
          path="/contact"
          render={props => (
            <Contact
              email={this.state.information.contact.email}
              twitter={this.state.information.contact.twitter}
              github={this.state.information.contact.github}
              {...props}
            />
          )}
        />
        <Footer currentYear={new Date().getFullYear()} />
      </Router>
    );
  }
}

export default Main;
