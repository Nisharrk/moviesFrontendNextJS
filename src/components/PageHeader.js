import React from "react";
import Card from "react-bootstrap/Card";

function PageHeader(props) {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Body>{props.text}</Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default PageHeader;
