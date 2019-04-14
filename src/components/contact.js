import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield,Button } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ronak Bhatt</h2>
            <img
              src="https://i.imgur.com/hpuTDHL.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>A hardworking professional who had competed B.E. (Computer Engg) A Team player with strong analytical and leadership skill. Keep learner with constant zest to acquire new skills Ruby On rails.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +91 96011 95650
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ronakabhattrz@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    Ronakabhattrz
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Cell col={12}>
          <Cell col={6}>
            <Textfield
                onChange={() => {}}
                label="Text..."
                style={{width: '500px'}}
                rows={3}
            />
          </Cell>
          <Cell col={6}>
            <Button raised colored>Button</Button>
          </Cell>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;