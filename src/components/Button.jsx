export default function Button({ curTab, handleClick, name }) {
  return (
    <div className="buttons-container">
      <button
        onClick={handleClick}
        className={curTab === "overview" ? `active-tab ${name}` : ""}
        value="overview"
      >
        <span>01</span> Overview
      </button>
      <button
        onClick={handleClick}
        className={curTab === "structure" ? `active-tab ${name}` : ""}
        value="structure"
      >
        <span>02</span> Structure
      </button>
      <button
        onClick={handleClick}
        className={curTab === "geology" ? `active-tab  ${name}` : ""}
        value="geology"
      >
        <span>03</span> Surface
      </button>
    </div>
  );
}
