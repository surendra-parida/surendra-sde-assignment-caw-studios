import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todo App with localStorage and TaskList", () => {
  
  beforeEach(() => {
    localStorage.clear();  
  });

  test("adds a new task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(button);

    const newTask = screen.getByText("Test Task");
    expect(newTask).toBeInTheDocument();
  });

  test("edits a task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(button);

    const editButtons = screen.getAllByText("Edit");
    window.prompt = jest.fn(() => "Edited Task");
    fireEvent.click(editButtons[0]);

    const editedTask = screen.getByText("Edited Task");
    expect(editedTask).toBeInTheDocument();
  });

  test("deletes a task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(button);

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    const deletedTask = screen.queryByText("Test Task");
    expect(deletedTask).not.toBeInTheDocument();
  });

  test("toggles task completion", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(checkboxes[0]).toBeChecked();
  });

  test("filters completed tasks", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    const completedButton = screen.getByText("Completed");
    fireEvent.click(completedButton);

    const task1 = screen.getByText("Task 1");
    const task2 = screen.queryByText("Task 2");

    expect(task1).toBeInTheDocument();
    expect(task2).not.toBeInTheDocument();
  });
});
