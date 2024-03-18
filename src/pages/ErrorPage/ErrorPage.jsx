import "./error.css";
import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>404 Nout found</h1>
      <h2>Saxifa topilmadi</h2>
      <Link to="/">Asosiy saxifaga qaytish</Link>
    </div>
  );
}

export default ErrorPage;
