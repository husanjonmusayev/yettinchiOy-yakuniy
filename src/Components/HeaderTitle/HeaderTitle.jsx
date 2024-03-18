import "./HeaderTitle.css";
function HeaderTitle({ title }) {
  return (
    <div className="headphones-content">
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
}

export default HeaderTitle;
