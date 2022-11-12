import React from "react";
import { useState } from "react";

function RequestList(props) {
  return (
    <div className="list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Name</th>
            <th scope="col">Short Description</th>
            <th scope="col">Email Id</th>
            <th scope="col">Long Description</th>
            <th scope="col">Complete a Request</th>
          </tr>
        </thead>
        <tbody id="main-table-body">
          {props.data.map(function (r, i) {
            return (
              <Request
                key={i}
                request={r}
                data={props.data}
                set_data={props.set_data}
                index={i}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Request({ request, data, set_data, index }) {
  function clicked() {
    let temp = [];

    for (let i = 0; i < data.length; i++) {
      temp.push(data[i]);
    }
    temp[index].isCompleted = true;
    set_data(temp);
  }

  function cancelled() {
    let temp = [];

    for (let i = 0; i < data.length; i++) {
      if (request != data[i]) temp.push(data[i]);
    }
    set_data(temp);
  }

  return (
    <tr
      className="request"
      style={{ textDecoration: request.isCompleted ? "line-through" : "" }}
    >
      <td>
        <button
          className="btn-close"
          aria-label="cancel"
          type="button"
          onClick={cancelled}
        ></button>
      </td>
      <td>{request.name}</td>
      <td>{request.sdescription}</td>
      <td>{request.emailId}</td>
      <td>{request.ldescription}</td>
      <td>
        <button
          className="btn-primary btn"
          aria-label="complete"
          type="button"
          onClick={clicked}
        >
          Complete
        </button>
      </td>
    </tr>
  );
}

function AddRequestForm({ addnewRequest }) {
  const [req, setreq] = useState({
    name: "",
    sdescription: "",
    emailId: "",
    ldescription: "",
  });
  console.log(req);

  const { name, sdescription, emailId, ldescription } = req;

  const onSubmitHandler = (e, r) => {
    e.preventDefault();
    addnewRequest({
      ...r,
    });
  };
  const onResetHandler = () => {
    setreq({
      name: "",
      sdescription: "",
      emailId: "",
      ldescription: "",
    });
  };

  return (
    <div className="form-contain">
      <div>
        <h1 align="center" style={{ marginBottom: "5%" }}>
          Create a Service Request
        </h1>
      </div>
      <form id="requestForm" className="login-form">
        <div className="form-outline mb-4">
          <label>Name</label>
          <input
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setreq({ ...req, name: e.target.value })}
          />
        </div>
        <div className="form-outline mb-4">
          <label>Short Description</label>
          <input
            id="sdescription"
            name="sdescription"
            className="form-control"
            placeholder="Enter Short Description"
            value={sdescription}
            onChange={(e) => setreq({ ...req, sdescription: e.target.value })}
          />
        </div>
        <div className="form-outline mb-4">
          <label>Email Id</label>
          <input
            id="emailId"
            name="emailId"
            className="form-control"
            placeholder="Enter Email ID"
            value={emailId}
            onChange={(e) => setreq({ ...req, emailId: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textAreaForRequest">Service Request</label>
          <textarea
            className="form-control"
            name="ldescription"
            id="ldescription"
            rows="5"
            value={ldescription}
            onChange={(e) => setreq({ ...req, ldescription: e.target.value })}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          id="create-req-btn"
          onClick={(e) => onSubmitHandler(e, req)}
        >
          Create Request
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          id="reset-req-btn"
          onClick={onResetHandler}
        >
          Reset Form
        </button>
      </form>
    </div>
  );
}

export { Request, AddRequestForm, RequestList };
