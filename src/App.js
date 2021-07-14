import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

const App = () => {

  const { Client } = require("@notionhq/client");
  const databaseId = process.env.REACT_APP_NOTION_API_DATABASE;
  console.log("databaseId => ", databaseId)
  const notion = new Client({ auth: process.env.REACT_APP_NOTION_API_KEY });
  console.log("notion => ", notion);

  const getDatabase = async () => {
    const response = await notion.databases.query({ database_id: databaseId });

    console.log(response);
  };

  useEffect(() => {
    getDatabase();
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
