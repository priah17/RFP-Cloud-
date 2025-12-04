import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { submitProposal, getProposalsForRFP } from "../services/proposal";

export default function RFPDetail(){
  const { id } = useParams();
  const [rfp, setRfp] = useState(null);
  const [proposal, setProposal] = useState({ price:"", timeline:"", details:"" });
  const [proposals, setProposals] = useState([]);

  useEffect(()=> {
    (async ()=> {
      const r = await API.get(`/rfps/${id}`);
      setRfp(r.data);
      const p = await getProposalsForRFP(id);
      setProposals(p.data);
    })();
  }, [id]);

  const onChange = e => setProposal({...proposal, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitProposal({...proposal, rfp: id, amount: Number(proposal.price)});
      alert("Proposal submitted");
      const p = await getProposalsForRFP(id);
      setProposals(p.data);
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  if(!rfp) return <div>Loading...</div>;

  return (
    <div>
      <h2>{rfp.title}</h2>
      <p>{rfp.description}</p>

      <h3>Submit Proposal</h3>
      <form onSubmit={onSubmit}>
        <input name="price" value={proposal.price} onChange={onChange} placeholder="Price" />
        <input name="timeline" value={proposal.timeline} onChange={onChange} placeholder="Timeline" />
        <textarea name="details" value={proposal.details} onChange={onChange} placeholder="Details" />
        <button type="submit">Submit Proposal</button>
      </form>

      <h3>Existing Proposals</h3>
      {proposals.map(p => (
        <div key={p._id}>
          <p>Vendor: {p.vendorId?.name || p.vendorId}</p>
          <p>Price: {p.price || p.amount}</p>
          <p>{p.details}</p>
        </div>
      ))}
    </div>
  );
}
