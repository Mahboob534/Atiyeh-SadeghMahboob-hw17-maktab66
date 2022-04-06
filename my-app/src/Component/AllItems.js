import React, { useState, useEffect, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckedContext } from "../Context/CheckedContext";
export default function AllItems() {
  const [dataFetch, setDataFetch] = useState([]);
  const { jobTitle, setJobTitle } = useContext(CheckedContext);
  useEffect(() => {
    fetch("https://624afa3771e21eebbcea8897.mockapi.io/ListJobs")
      .then((data) => data.json())
      .then((result) => setDataFetch(result));
  }, []);

  //console.log(isChecked,jobTitle);

  function handelCheck(e) {
    if (e.target.checked === true) {
     // setIsChecked([...isChecked, e.target.checked]);
      setJobTitle([...jobTitle, e.target.value]);
    } else {
      
      //setIsChecked(isChecked.filter((item)=> e.target.checked!==item));
      setJobTitle(jobTitle.filter(item=> e.target.value!==item));
    }
  }
  return (
    <>
      <ListGroup className=" mx-2">
        
        {dataFetch.map((item, key) => (
          <ListGroup.Item variant="primary" key ={item.id} >
           
            <input
              type="checkbox"
              value={item.title}
              onChange={handelCheck}
            />
            {item.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
