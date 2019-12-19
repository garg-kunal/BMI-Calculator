import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<div>
  <Card name="hello" 
  img="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ship-technology.com%2Fwp-content%2Fuploads%2Fsites%2F16%2F2019%2F04%2Fshutterstock_1021428100-No-credit.jpg&imgrefurl=https%3A%2F%2Fwww.ship-technology.com%2Ffeatures%2Fsmart-ports-summit%2F&tbnid=yvSRT0xFai980M&vet=12ahUKEwjl8M6wpbzmAhXUYH0KHb6RDBEQMygAegUIARCHAg..i&docid=Y1NdqxE2zJziUM&w=800&h=600&q=ports&ved=2ahUKEwjl8M6wpbzmAhXUYH0KHb6RDBEQMygAegUIARCHAg" />
  </div>, rootElement);
