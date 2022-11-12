import React from "react";
import "./App.css";
import { AddRequestForm, RequestList } from './components/ServiceRequest'
import Nav from './components/Navbar'
import RequestChart from "./components/Chart";
import Landing from './components/Landing'
import {
  Routes,
  Route
} from "react-router-dom";
import request_list from './initial-data.json';
import { useState } from "react";


function App() {
  const [reqList, setreqList] = useState(request_list);
  const addnewRequest = (newRequest) => {
    setreqList([
      ...reqList, newRequest
    ]);
  };
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={<RequestList data = {reqList} set_data = {setreqList}  />} />
        <Route path="/add" element={<AddRequestForm addnewRequest={addnewRequest}/>} />
        <Route path="/chart" element={<RequestChart data = {reqList} />} />
      </Routes>
    </>
  );
}

export default App;