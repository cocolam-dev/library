import { useState } from "react";
import "./App.css";
import NewBookForm from "./components/NewBookForm";
import BookTable from "./components/BookTable";

function App() {
  return (
    <>
      <h1>My Library</h1>
      <NewBookForm />
      <BookTable />
    </>
  );
}

export default App;
