import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ employeesDB }) => {
  console.log(employeesDB);

  const employees = employeesDB.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeesListItem key={id} {...itemProps} />;
  });

  return <ul className="app-list list-group">{employees}</ul>;
};

export default EmployeesList;
