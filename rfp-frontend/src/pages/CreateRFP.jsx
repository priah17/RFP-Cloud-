import React, { useState } from "react";
import { createRFP } from "../services/rfp";

export default function CreateRFP() {
  const [form, setForm] = useState({ title:"", description:"", budget:"", deadline:"" });
  const [msg, setMsg] = useState(null);

  const onChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRFP({...form, budget: Number(form.budget), deadline: new Date(form.deadline) });
      setMsg("RFP created");
      setForm({ title:"", description:"", budget:"", deadline:"" });
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="card">
      <h2>Create RFP</h2>
      {msg && <div>{msg}</div>}
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={onChange} placeholder="Title"/>
        <textarea name="description" value={form.description} onChange={onChange} placeholder="Description" />
        <input name="budget" value={form.budget} onChange={onChange} placeholder="Budget" />
        <input name="deadline" type="date" value={form.deadline} onChange={onChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
