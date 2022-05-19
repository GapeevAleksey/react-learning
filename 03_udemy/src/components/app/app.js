import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import stylesApp from './app.module.css';

function App() {
  const employeesDB = [
    {
      name: 'Alex Nose',
      salary: 15000,
      increase: false,
      id: 1,
    },
    {
      name: 'Mike Shinoda',
      salary: 7000,
      increase: true,
      id: 2,
    },
    {
      name: 'Alice Cooper',
      salary: 2000,
      increase: false,
      id: 3,
    },
  ];

  return (
    <div className={stylesApp.app}>
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employeesDB={employeesDB} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
