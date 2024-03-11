export function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>TITLE: {title}</h3>
      <p>DESCRIPTION: {description}</p>
    </li>
  );
}
