import { CORE_CONCEPTS } from "../data";
import { CoreConcepts } from "./CoreConcepts";

export default function () {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcepts key={conceptItems.title} {...conceptItems} />
        ))}

        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
