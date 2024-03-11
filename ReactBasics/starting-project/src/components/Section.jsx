export default function Section({ title, children, ...props }) {
  return (
    //spreading attributes
    <section {...props}> 
      <h2>{title}</h2>
      {children}
    </section>
  );
}
