import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-shape-mG1HW6QVkfB.png"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML | CSS | Bootstrap | JavaScript | React | Ruby On Rails | Postgres | Mysql</p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/ronak-bhatt-043022133/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                <a href="https://www.github.com/RonakabhattRz" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a href="https://www.facebook.com/RonakbhattRz" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                <a href="https://www.youtube.com/channel/UC_jKbr7ACXE7LsuDoLaCJcw" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                <a href="https://www.instagram.com/RonakbhattRz/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;