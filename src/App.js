import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Cases from './Components/case/Cases';
import Search from './Components/case/Search';
import Alert from './Components/Layout/Alert';
import About from './Components/Layout/pages/About';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    cases: [],
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://disease.sh/v3/covid-19/states/`);

    this.setState({ cases: res.data, loading: false });
  }
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //Search state
  searchCases = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://disease.sh/v3/covid-19/states/${encodeURIComponent(text)}`
    );

    this.setState({ cases: [res.data], loading: false });
  };

  //CLear Case from state
  clearCase = () => this.setState({ cases: [], loading: false });

  //Set alert

  render() {
    const { cases, loading } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchCases={this.searchCases}
                      clearCase={this.clearCase}
                      showClear={cases.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Cases loading={loading} cases={cases} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
