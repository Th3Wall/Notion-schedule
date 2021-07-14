import './App.css';
import { useEffect } from "react";

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
      <h1>Notion Schedule</h1>
    </div>
  );
}

export default App;
