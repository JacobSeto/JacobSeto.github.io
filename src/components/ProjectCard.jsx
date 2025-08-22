// ProjectCard.jsx
export default function ProjectCard({ id, label, title, border, bullets, description, image, link }) {
  const borderClass = `${border}-border`;
  const hasImageClass = image ? 'has-side-image' : '';

  return (
    <div id={id} className={`checkpoint ${borderClass} ${hasImageClass}`}>
      <div>
        {label && <label>{label}</label>}
        <h2>{title}</h2>

        {image ? (
          <img className="checkpoint-image" src={`/images/${image}`} alt={title} />
        ) : null}
        <ul>{bullets?.map((b, i) => <li key={i}>{b}</li>)}</ul>
        <p>{description}</p>
        <p>{link ? (
          <a href={link} target="_blank" rel="noreferrer">Link to Project</a>
        ) : null}</p>
      </div>
    </div>
  );
}
