import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'
import { formatName } from '../services/FormatName'

const Area = (props) => (

  <div className='area' id={props.name}>
    <h3 className='labels'>{formatName(props.name)}</h3>
    <HostList
      hosts={props.hosts}
      selected={props.selected}
      handleClick={props.handleClick}
    />

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
