import React from "react";
import "./App.css";
import AllItems from "./Component/AllItems";
import SelectedItem from "./Component/SelectedItem";
import CheckedProvider from "./Context/CheckedContext";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <CheckedProvider>
        <Table striped bordered hover size="sm">
          <thead>
            <tr >
              <th className="bg-warning w-50"> All Items</th>
              <th className="bg-danger w-50">Selected Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
               <AllItems />

              </td>
              <td>
              <SelectedItem />
              </td>
            </tr>
           
            
          </tbody>
        </Table>

        
      </CheckedProvider>
    </div>
  );
}

export default App;
