import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import { Log } from './services/Log'
import { formatName } from './services/FormatName'
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  state = {
    hosts: [],
    areas: [],
    logs: [],
    selected: null
  }

  async componentDidMount() {
    const hosts = await fetch('http://localhost:4000/hosts').then(res => res.json())
    const areas = await fetch('http://localhost:4000/areas').then(res => res.json())

    this.setState({ hosts, areas })
  }

  handleToggle = (id) => {
    const host = this.state.hosts.find(host => host.id === id)
    host.active = !host.active
    this.setState({
      hosts: this.state.hosts,
      logs: [ host.active ? Log.warn(`Activated ${host.firstName}`) : Log.notify(`Decommissioned ${host.firstName}`), ...this.state.logs]
    })
  }

  handleClick = (selected) => {
    this.setState({ selected })
  }

  handleMove = (areaName) => {
    const host = this.state.hosts.find(host => host.id === this.state.selected)
    const area = this.state.areas.find(area => area.name === areaName)
    const hostsInArea = this.state.hosts.filter(host => host.area === areaName)
    if (hostsInArea.length < area.limit) {
      host.area = areaName
      this.setState({
        hosts: this.state.hosts,
        logs: [Log.notify(`${host.firstName} set in area ${formatName(areaName)}`), ...this.state.logs]
      })
    } else {
      this.setState({
        logs: [Log.error(`Too many hosts. Cannot add ${host.firstName} to ${formatName(areaName)}`), ...this.state.logs]
      })
    }
  }

  handleActivate = (activate) => {
    this.state.hosts.forEach(host => host.active = activate)
    this.setState({
      hosts: this.state.hosts,
      logs: [ activate ? Log.warn('Activating all hosts!') : Log.notify('Decommissioning all hosts.'), ...this.state.logs]
    })
  }

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          hosts={this.state.hosts}
          areas={this.state.areas}
          selected={this.state.selected}
          handleClick={this.handleClick}
        />
        <Headquarters
          hosts={this.state.hosts}
          areas={this.state.areas}
          selected={this.state.selected}
          logs={this.state.logs}
          handleToggle={this.handleToggle}
          handleClick={this.handleClick}
          handleMove={this.handleMove}
          handleActivate={this.handleActivate}
        />
      </Segment>
    )
  }
}

export default App;
