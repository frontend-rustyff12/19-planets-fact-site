import { Link } from "react-router";
export default function NotFound() {
  return (
    <section className="not-found">
      <h1>
        404 - Opps, <br /> Page Not Found
      </h1>

      <Link to="/">Return To Home</Link>
    </section>
  );
}
