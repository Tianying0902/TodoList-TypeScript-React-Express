
import { render, screen, fireEvent} from '@testing-library/react';
import { TodoFilterButtons } from '../components/TodoFilterButtons';
import { ITodo } from '../types';
jest.mock('axios');
test("render filter part", () => {
    render(<TodoFilterButtons todos={[]} showAllTodos={function (): void {
        throw new Error('Function not implemented.');
    } } showActiveTodos={function (): void {
        throw new Error('Function not implemented.');
    } } showCompletedTodos={function (): void {
        throw new Error('Function not implemented.');
    } } clearCompletedTodos={function (): void {
        throw new Error('Function not implemented.');
    } } />);
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });


  describe('TodoFilterButtons for All', () => {
    const todos: ITodo[] = [
      { id: 1, task: 'Todo 1', completed: false },
      { id: 2, task: 'Todo 2', completed: true },
      { id: 3, task: 'Todo 3', completed: false },
    ];
    const showAllTodos = jest.fn();
    const showActiveTodos = jest.fn();
    const showCompletedTodos = jest.fn();
    const clearCompletedTodos = jest.fn();
  
    it('renders the correct number of items left', () => {
       render(
        <TodoFilterButtons
          todos={todos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          clearCompletedTodos={clearCompletedTodos}
        />
      );
      const itemsLeftText = screen.getByText(`${todos.length} items left`);
      expect(itemsLeftText).toBeInTheDocument();
    });
  
    it('calls the correct function when "All" button is clicked', () => {
    render(
        <TodoFilterButtons
          todos={todos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          clearCompletedTodos={clearCompletedTodos}
        />
      );
      const allButton = screen.getByText('All');
      fireEvent.click(allButton);
      const itemsLeftText = screen.getByText(`${todos.length} items left`);
      expect(itemsLeftText).toBeInTheDocument();
      expect(showAllTodos).toHaveBeenCalled();
    });
    it('calls the correct function when "Active" button is clicked', () => {
        render(
            <TodoFilterButtons
              todos={todos}
              showAllTodos={showAllTodos}
              showActiveTodos={showActiveTodos}
              showCompletedTodos={showCompletedTodos}
              clearCompletedTodos={clearCompletedTodos}
            />
          );
          const activeButton = screen.getByText('Active');
          fireEvent.click(activeButton);
          const itemsLeftText = screen.getByText(`${todos.map((todo)=>todo.completed ===false).length} items left`);
          expect(itemsLeftText).toBeInTheDocument();
          expect(showActiveTodos).toHaveBeenCalled();
        });
        it('calls the correct function when "Completed" button is clicked', () => {
            render(
                <TodoFilterButtons
                  todos={todos}
                  showAllTodos={showAllTodos}
                  showActiveTodos={showActiveTodos}
                  showCompletedTodos={showCompletedTodos}
                  clearCompletedTodos={clearCompletedTodos}
                />
              );
              const completedButton = screen.getByText('Completed');
              fireEvent.click(completedButton);
              const itemsLeftText = screen.getByText(`${todos.map((todo)=>todo.completed ===true).length} items left`);
              expect(itemsLeftText).toBeInTheDocument();
              expect(showCompletedTodos).toHaveBeenCalled();
            });
            it('calls the correct function when "Clear Completed" button is clicked', () => {
                render(
                    <TodoFilterButtons
                      todos={todos}
                      showAllTodos={showAllTodos}
                      showActiveTodos={showActiveTodos}
                      showCompletedTodos={showCompletedTodos}
                      clearCompletedTodos={clearCompletedTodos}
                    />
                  );
                  const clearCompletedButton = screen.getByText('Clear Completed');
                  fireEvent.click(clearCompletedButton);
            //       const itemsLeftText = screen.getByText(`2 items left`);
            //   expect(itemsLeftText).toBeInTheDocument();
                  expect(clearCompletedTodos).toHaveBeenCalled();
                //   expect(showAllTodos).toHaveBeenCalled();
                });
  
  });