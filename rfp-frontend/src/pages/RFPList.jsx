import React, { useEffect, useState } from "react";
import { getRFPs } from "../services/rfp";

export default function RFPList(){
  const [rfps, setRfps] = useState([]);
  useEffect(()=> {
    (async ()=> {
      const res = await getRFPs();
      setRfps(res.data);
    })();
  }, []);
  return (
    <div>
      <h2>Open RFPs</h2>
      <div style={{display:"flex",flexWrap:"wrap",gap:16}}>
        {rfps.map(r=>(
          <div key={r._id} className="card" style={{width:300}}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
            <p>Budget: {r.budget}</p>
            <p>Deadline: {new Date(r.deadline).toLocaleDateString()}</p>
            <a href={`/rfp/${r._id}`}>View / Propose</a>
          </div>
        ))}
      </div>
    </div>
  );
}
