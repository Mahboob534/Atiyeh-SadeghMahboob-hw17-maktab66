import React from 'react'
import  PropTypes  from 'prop-types';
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

export default function List(props) {
 
  const { propTitle}=props
  
  return (
    <ListGroup.Item variant='warning'>{propTitle}</ListGroup.Item>
  )
}
List.propTypes={
  propTitle:PropTypes.string
}

List.defaultProps={
  propTitle:"in not selected"
}
