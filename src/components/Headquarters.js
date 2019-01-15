import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.



  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

          <ColdStorage
            hosts={this.props.hosts.filter(host => !host.active)}
            handleClick={this.props.handleClick}
            selected={this.props.selected}
          />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            host={this.props.hosts.find(host => host.id === this.props.selected)}
            areas={this.props.areas}
            handleToggle={this.props.handleToggle}
            handleMove={this.props.handleMove}
          />
        </Grid.Column>
        <Grid.Column width={3}>

          <LogPanel
            active={this.props.hosts.every(host => host.active)}
            logs={this.props.logs}
            handleActivate={this.props.handleActivate}
          />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
