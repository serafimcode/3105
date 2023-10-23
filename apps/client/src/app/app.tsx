// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import {useEffect} from "react";
import axios from "axios";

const BASE_URL = '/api';

export function App() {
  useEffect(() => {
    axios.get(BASE_URL).then(console.log)
  });
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default App;
