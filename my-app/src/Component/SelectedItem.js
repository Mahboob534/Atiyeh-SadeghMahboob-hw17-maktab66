import React,{useContext} from 'react'
import {CheckedContext} from '../Context/CheckedContext';
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import List from './List';

export default function SelectedItem() {
  const { jobTitle } = useContext(CheckedContext);
  return (
    <ListGroup  className=" mx-2">
      
    { jobTitle.map((item)=> <List  propTitle={item}
     />)

    }
    
  </ListGroup>
  )
}
