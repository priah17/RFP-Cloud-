import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>RFP Portal</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard/org">Org Dashboard</Link>
        <Link to="/dashboard/vendor">Vendor Dashboard</Link>
        <Link to="/admin">Admin Panel</Link>
        <Link to="/comparison">Proposal Comparison</Link>
      </nav>
    </header>
  );
}



