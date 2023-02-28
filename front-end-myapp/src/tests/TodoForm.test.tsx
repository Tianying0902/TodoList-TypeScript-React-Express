import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoForm } from '../components/TodoForm';


describe('TodoForm',() => {
    test('should match text about placeholder', () => {
        render(<TodoForm addTodo={function (newTodo: string): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(
          screen.getByPlaceholderText('what\'s the next?')
        ).toBeInTheDocument();
      });
      test('should show add button', () => {
          render(<TodoForm addTodo={function (newTodo:string): void {
              throw new Error('Function not implemented.');
          }
      
      }/>); 
          expect(screen.getByText(/Add new text/i)).toBeInTheDocument();
      });
      
      test('should handle onChange', () => {
          render(<TodoForm addTodo={function (newTodo:string): void {
              throw new Error('Function not implemented.');
          }
      }/>); 
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'handle onchange' } });
      expect(input.getAttribute('value')).toBe('handle onchange');
      });
      
})
describe('submit this TodoForm',()=>{
    test('should add a new todo when click the add button', () => {
        const mockTodo = 'task created by clicking button';
        render(<TodoForm addTodo={function (newTodo: string): void {
            throw new Error('Function not implemented.');
        } } />)
      const input = screen.getByRole('textbox')
      input.textContent = mockTodo;
      const btn = screen.getByRole('button');
     userEvent.click(btn)
      expect(input.getAttribute('value')).toBe('');
    })
    test('should add a new todo when press the add enter', () => {
        const mockTodo = 'task created by clicking button';
        render(<TodoForm addTodo={function (newTodo: string): void {
            throw new Error('Function not implemented.');
        } } />)
      const input = screen.getByRole('textbox')
      input.textContent = mockTodo;
     userEvent.keyboard('enter')
      expect(input.getAttribute('value')).toBe('');
    })
})

describe('should send a post request when user add new todo',()=>{
    test('should send a post request when user click add button',()=>{

    })
})
