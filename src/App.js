import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="RONAK BHATT" style={{color: 'white'}} scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      {/* <Link to="/aboutme">About</Link> */}
                      {/* <Link to="/projects">Projects</Link> */}
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="RONAK BHATT">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      {/* <Link to="/aboutme">About</Link> */}
                      {/* <Link to="/projects">Projects</Link> */}
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main></Main>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
