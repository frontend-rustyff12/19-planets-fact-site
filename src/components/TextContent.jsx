export default function TextContent({ pageData, name }) {
  return (
    <div className="text-container">
      <h1 className="uppercase">{name}</h1>
      <p className="info">{pageData.content}</p>
      <p className="source">
        <span>Source :</span>{" "}
        <a href={pageData.source} target="_blank" rel="noopener noreferrer">
          Wikipedia
        </a>
        <img src="/icon-source.svg" alt="" />
      </p>
    </div>
  );
}
