import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Project  extends Component {
    state = {  }
    render() { 
        return ( 
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <h1 class="resume_heading">Resume</h1>
                  <embed src="https://a.uguu.se/IfZN0nXMnQMx_ronak_resume.pdf" width="1000" height="600"></embed>
              </Cell>
            </Grid>
          </div>
         );
    }
}
export default Project;