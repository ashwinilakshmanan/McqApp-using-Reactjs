import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import CategoryService from "../services/CategoryService";
import "./categories.css";
function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    CategoryService.getAllCategories().then((response) => {
      setCategories(response.data);
      console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Categories</h2>
      <Link to="/add-categories" className="btn btn-primary mb-2 text-right">Add Category</Link>
      <div className="d-flex text-center mb-5 ">
        {categories.map((category) => (
          <Card style={{ width: "18rem" }} className="m-3 cardbackground " onClick={navigate("/questions")}>
            <Card.Body>
              <Card.Text>10 marks</Card.Text>
              <Button variant="primary">{category.name}</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Categories;
