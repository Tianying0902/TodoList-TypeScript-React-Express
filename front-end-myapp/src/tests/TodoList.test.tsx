import { render, screen } from '@testing-library/react';
import { TodoList } from '../components/TodoList';

test("render filter part", () => {
    const mockTodos = [{id:1,task:'Task 001',completed:true},{id:2,task:'Task 002',completed:false}]
  render(<TodoList todoData={mockTodos} deleteTodo={function (id: number): void {
      throw new Error('Function not implemented.');
  } } markTodo={function (id: number): void {
      throw new Error('Function not implemented.');
  } } editTodo={function (id: number, value: string): void {
      throw new Error('Function not implemented.');
  } }/>)
  expect(screen.getByText(/Task 001/i)).toBeInTheDocument();
  expect(screen.getByText(/Task 002/i)).toBeInTheDocument();
  });