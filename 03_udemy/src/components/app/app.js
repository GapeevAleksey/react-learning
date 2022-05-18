import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import stylesApp from './app.module.css';

function App() {
  return (
    <div className={stylesApp.app}>
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
        <EmployeesList />
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
