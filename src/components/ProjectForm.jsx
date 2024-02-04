import React, { useState } from "react";
import Project from "./Project";

const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    strCategory: "",
    strCategoryDescription: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;

    let updatedValue = value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  };

  const validate = (project) => {
    let errors = { strCategory: "", strCategoryDescription: "" };

    if (project.strCategory.length === 0) {
      errors.name = "Name is required";
    }
    if (project.strCategory.length > 0 && project.strCategory.length < 3) {
      errors.name = "Name need to be more than 3 character";
    }
    if (project.strCategoryDescription.length === 0) {
      errors.name = "Description is required";
    }

    return errors;
  };

  const isValid = () => {
    return (
      errors.strCategory.length === 0 &&
      errors.strCategoryDescription.length === 0
    );
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="strCategory"> Project Name </label>
      <input
        type="text"
        name="strCategory"
        placeholder="Enter Name"
        value={project.strCategory}
        onChange={handleChange}
      />
      <label htmlFor="strCategoryDescription"> Project Description </label>
      <textarea
        name="strCategoryDescription"
        placeholder="Enter Description"
        cols="30"
        rows="10"
        value={project.strCategoryDescription}
        onChange={handleChange}
      ></textarea>
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
