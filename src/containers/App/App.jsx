import cn from 'classnames';
import styles from './App.module.css';

const App = () => {
  return (
    <h1 className={cn(styles.red, styles.text)}>Привет</h1>
  )
}

export default App;
