import React, { useState } from "react";
import "../CreatePage/CreatePage.css";

const CreatePage = () => {
  const [val, setVal] = useState("");
  return (
    <div>
      <div className="container">
        <div className="element-wrapper">
          Enter product name:
          <input className="input" type="text" />
        </div>
        <div className="element-wrapper">
          Product category:
          <select className="items">
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
          </select>
        </div>
        <div className="element-wrapper">
          Price:
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Only numbers"
            className="input"
            value={val}
            onChange={(e) =>
              setVal((v) => (e.target.validity.valid ? e.target.value : v))
            }
          />
        </div>

        <div className="add" id="cancel" onClick={() => console.log("asd")}>
          Cancel
        </div>
        <div className="add" onClick={() => console.log("asd")}>
            Save
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
