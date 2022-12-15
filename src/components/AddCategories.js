import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CategoryService from "../services/CategoryService";
function AddCategories() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const saveOrUpdateCategory = (event) => {
    event.preventDefault();
    const category = { categoryName };

    CategoryService.createCategory(category)
      .then((response) => {
        console.log(response.data);
        navigate("/categories");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="card-body">
        <form>
          <div className="form-group mb-2">
            <label className="form-label">Category</label>
            <input
              type="text"
              placeholder="Enter the Category"
              className="form-control"
              name="category"
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
            />
          </div>
          <Button
            className="btn btn-success"
            onClick={(event) => saveOrUpdateCategory(event)}
          >
            Submit
          </Button>
          <Link to="/categories" className="btn btn-danger m-4">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddCategories;
