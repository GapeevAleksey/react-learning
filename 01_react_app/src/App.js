import TodoList from './Todo/TodoList';
function App() {
  const todosProps = [
    { id: 1, complited: false, title: 'Купить хлеб' },
    { id: 2, complited: false, title: 'Купить масло' },
    { id: 3, complited: false, title: 'Купить кефир' },
  ];

  return (
    <div className="wrapper">
      <h1>New React App</h1>

      <TodoList todos={todosProps}/>
    </div>
  );
}

export default App;
