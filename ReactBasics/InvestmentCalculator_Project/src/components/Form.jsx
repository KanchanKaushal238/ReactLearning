import { useState } from "react";

export default function Form({ labelName, valueChangedFor, setValue, onValueChange }) {
//   const [valueinput, setValue] = useState(initialValue);

//   function handleChange(event) {
//     setValue(event.target.value);

//     onValueChange(valueChangedFor,valueinput);
//   }
  return (
    <>
      <li>
          <p>
            <label>{labelName}</label>
            <input
              type="number"
              onChange={(event) => {
                onValueChange(valueChangedFor,event.target.value);
              }}
              value={setValue}
              required
            />
          </p>
     </li>
    </>
  );
}
