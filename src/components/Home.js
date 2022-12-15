import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>ONLINE QUIZ APP</Card.Title>
          <div className="d-flex flex-wrap justify-center">
          <a href="" variant="primary" className="btn btn-link">ADMIN</a>
          <a href="" variant="primary" className="btn btn-link">USER</a>
          </div>
       <a href="/register">Create Account</a>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default Home;
