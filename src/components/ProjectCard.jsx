// PROPS: how a parent passes data into a component.
// Destructuring `{ title, ... }` pulls the values out of the props object.
export default function ProjectCard({ title, description, image, codeUrl, liveUrl }) {
  return (
    <article className="project-card">
      <div className="project-thumbnail">
        <img src={`/images/${image}`} alt={title} />
      </div>
      <div className="project-details-overlay">
        <p className="project-title-text">{title}</p>
        <p className="project-description">{description}</p>
        <div className="project-buttons">
          {/* CONDITIONAL RENDERING: `a && b` shows b only if a exists */}
          {codeUrl && (
            <a className="btn-action btn-code" href={codeUrl} target="_blank" rel="noreferrer">
              👁 VIEW CODE
            </a>
          )}
          {liveUrl && (
            <a className="btn-action btn-live" href={liveUrl} target="_blank" rel="noreferrer">
              ▶︎ LIVE VIEW
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
