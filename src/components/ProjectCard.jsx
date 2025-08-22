export default function ProjectCard({ id, label, title, border, bullets, description, image, link }) {
  const borderClass = `${border}-border`;

  return (
    <div id={id} className={`checkpoint ${borderClass}`}>
      <div>
        {label && <label>{label}</label>}
        <h2>{title}</h2>

        {image && link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <img className="checkpoint-image" src={`/images/${image}`} alt={title} />
          </a>
        ) : (
          image && <img className="checkpoint-image" src={`/images/${image}`} alt={title} />
        )}

        <ul>{bullets?.map((b, i) => <li key={i}>{b}</li>)}</ul>
        <p>{description}</p>
      </div>
    </div>
  );
}
