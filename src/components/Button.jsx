export default function Button({ curTab, handleClick, name }) {
  return (
    <div
      className="buttons-container"
      role="tablist"
      aria-label="Planet information tabs"
    >
      <button
        onClick={handleClick}
        className={curTab === "overview" ? `active-tab ${name}` : ""}
        value="overview"
        role="tab"
        aria-selected={curTab === "overview"}
        aria-controls="overview-panel"
        id="overview-tab"
      >
        <span className="tab-number" aria-hidden="true">
          01
        </span>{" "}
        Overview
      </button>
      <button
        onClick={handleClick}
        className={curTab === "structure" ? `active-tab ${name}` : ""}
        value="structure"
        role="tab"
        aria-selected={curTab === "structure"}
        aria-controls="structure-panel"
        id="structure-tab"
      >
        <span className="tab-number" aria-hidden="true">
          02
        </span>{" "}
        Structure
      </button>
      <button
        onClick={handleClick}
        className={curTab === "geology" ? `active-tab  ${name}` : ""}
        value="geology"
        role="tab"
        aria-selected={curTab === "geology"}
        aria-controls="geology-panel"
        id="geology-tab"
      >
        <span className="tab-number" aria-hidden="true">
          03
        </span>{" "}
        Surface
      </button>
    </div>
  );
}
