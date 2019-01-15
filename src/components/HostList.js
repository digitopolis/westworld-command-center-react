import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => <Host
        key={host.id} {...host}
        handleClick={props.handleClick}
        selected={props.selected}
      />)}
    </Card.Group>
  )
}

export default HostList
