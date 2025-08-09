export default function ProjectCard({ id, label, title, border, bullets, description, image, link }) {
  const borderClass = `${border}-border` // white-border / green-border / blue-border
  return (
    <div className={`checkpoint ${borderClass}`}>
      <a id={id}>
        <div>
          {label && <label>{label}</label>}
          <h2>{title}</h2>
          {link && image && (
            <a href={link} target="_blank" rel="noreferrer">
              <img className="checkpoint-image" src={`/images/${image}`} alt={title} />
            </a>
          )}
          {!link && image && <img className="checkpoint-image" src={`/images/${image}`} alt={title} />}
          <ul>{bullets?.map((b, i) => <li key={i}>{b}</li>)}</ul>
          <p>{description}</p>
        </div>
      </a>
    </div>
  )
}
