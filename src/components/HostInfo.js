import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { formatName } from '../services/FormatName'


class HostInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.areas.map(area => ({key: area.name, text: formatName(area.name), value: area.name}))
    }
  }
  // state = {
  //   options: [{key: "some_area", text: "Some Area", value: "some_area"}, {key: "another_area", text: "Another Area", value: "another_area"}],
  //   value: "some_area",
  //   // This state is just to show how the dropdown component works.
  //   // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  //   // Value has to match the value in the object to render the right text.
  //
  //   // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  // }

  toggle = () => {
    this.props.handleToggle(this.props.id)
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={ this.props.imageUrl }
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {`${this.props.firstName} ${this.props.lastName}`} | { this.props.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.active ? "Active" : "Decommissioned"}
                  checked={this.props.active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={(_, { value }) => this.props.handleMove(value)}
                value={this.props.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
