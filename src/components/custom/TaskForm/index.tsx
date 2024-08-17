// src/components/custom/TaskForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TaskFormWrapper,
  TaskFormTitle,
  TaskFormLabel,
  TaskFormInput,
  TaskFormSelect,
  TaskFormButton,
  TaskFormTime,
} from "../../shared/AppStyle";
import { getPeriod } from "../../../lib/utils/timeUtils";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Trainee");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const period = getPeriod();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // local storage logic
    setAlertMessage("Record submitted successfully");
    setTitle("");
    setDescription("");
    setTag("Trainee");
    setTimeout(() => {
      setAlertMessage(null);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <TaskFormWrapper>
      {alertMessage && (
        <div className="alert alert-success">{alertMessage}</div>
      )}
      <TaskFormTitle>{`Write ${period}`}</TaskFormTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <TaskFormLabel htmlFor="title">Title:</TaskFormLabel>
          <TaskFormInput
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <TaskFormLabel htmlFor="tag">Tag:</TaskFormLabel>
          <TaskFormSelect
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
          >
            <option value="Trainee">Trainee</option>
            <option value="Intern">Intern</option>
          </TaskFormSelect>
        </div>
        <div>
          <TaskFormLabel htmlFor="description">Description:</TaskFormLabel>
          <TaskFormInput
            as="textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <TaskFormButton type="submit">Submit</TaskFormButton>
      </form>
      <TaskFormTime>Time and Date: {new Date().toLocaleString()}</TaskFormTime>
    </TaskFormWrapper>
  );
};

export default TaskForm;
