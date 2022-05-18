import stylesAppInfo from './app-info.module.css';

const AppInfo = () => {
  return (
    <div className={stylesAppInfo.appInfo}>
      <h1>Учет сотрудников</h1>
      <h2>Общее число сотрудников</h2>
      <h2>Премию получат:</h2>
    </div>
  );
};

export default AppInfo;
