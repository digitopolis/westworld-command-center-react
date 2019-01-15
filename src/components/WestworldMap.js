import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(area => <Area key={area.id} hosts={props.hosts.filter(host => host.area === area.name && host.active)} selected={props.selected} handleClick={props.handleClick} {...area}/>)}
    </Segment>
  )
}

export default WestworldMap
