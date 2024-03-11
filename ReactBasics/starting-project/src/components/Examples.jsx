import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  // destructuring
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "Please click a button";

  function handleSelect(selectedComponents) {
    // tabContent = selectedComponents;
    // console.log(selectedComponents);

    setSelectedTopic(selectedComponents);
  }

  // 3rd way to add conditions to div elements
  var tabContent = "Please click a button";
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      {/* <h2>Examples</h2> */}

      <Tabs
        id="tab-content"
        ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {/* <TabButton label="Components"/> */}
      {/* {selectedTopic} */}
      {/* First way to show conditional expressions */}
      {/* {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}
      {/* 2nd way to show conditional expressions */}
      {/* <div id="tab-content">
        {!selectedTopic && (
          <p>Please select a topic</p>
        ) }
      {selectedTopic && (
          <div>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
        </div> */}

      {/* 3rd way to show conditional expressions */}
    </Section>
  );
}
