import { Component, useState, useEffect, useCallback } from 'react';
import './CCC.css';

const CCC = ({ buttons }) => {
  const [info, setInfo] = useState({ data: [], loaded: 'users' });

  // const getData = useCallback(
  //   (whatLoad) => {
  //     fetch(`https://jsonplaceholder.typicode.com/${whatLoad}`)
  //       .then((response) => response.json())
  //       .then((result) => setInfo({ data: [...result], loaded: whatLoad }));
  //     console.log(info);
  //   },
  //   [info.loaded]
  // );

  const getData = (whatLoad) => {
    fetch(`https://jsonplaceholder.typicode.com/${whatLoad}`)
      .then((response) => response.json())
      .then((result) => setInfo({ data: [...result], loaded: whatLoad }));
    console.log(info);
  };

  const changeData = (whatShow) => {
    setInfo((prev) => {
      return { data: [...prev.data], loaded: whatShow };
    });
  };

  const deleteItem = (id) => {
    const newInfo = info.data.filter((item) => item.id !== id);

    setInfo((prev) => ({ data: newInfo, loaded: prev.loaded }));
    console.log(id);
  };

  useEffect(() => {
    console.log('render');
    return getData(info.loaded);
  }, [info.loaded]);

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        {buttons.map((button) => {
          return (
            <button
              key={button.id}
              style={{ marginBottom: '10px' }}
              type="button"
              className={
                info.loaded === button.name
                  ? 'btn btn-warning'
                  : 'btn btn-primary'
              }
              onClick={(e) => {
                e.preventDefault();
                changeData(button.name);
              }}
            >
              {button.title}
            </button>
          );
        })}
      </div>
      <ul className="list-group">
        {info.data.map((item) => {
          return (
            <li key={item.id} className="list-group-item">
              {item.id + '. '}
              {item.name ? item.name : null}
              {item.title ? item.title : null}
              {item.email ? ': ' + item.email : null}
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  deleteItem(item.id);
                }}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CCC;
