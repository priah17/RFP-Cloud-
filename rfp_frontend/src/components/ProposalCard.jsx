export default function ProposalCard({ proposal }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="font-bold">{proposal.vendor_name}</h2>
      <p>{proposal.proposal_details}</p>
      <p>Price: ${proposal.price}</p>
    </div>
  );
}
