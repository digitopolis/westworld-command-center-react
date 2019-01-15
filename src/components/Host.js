import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

/* NOTE: The className "host selected" renders a different style than simply "host". */

const Host = (props) => {

  return(
    <Card
      className={props.selected === props.id ? 'host selected' : 'host'}
      onClick={()=>props.handleClick(props.id)}
      image={props.imageUrl}
      raised
    />
  )
}

export default Host
