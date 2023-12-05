import React, { useState } from "react";

interface chkProp {
  id: string;
  labelText: string;
  checked: boolean;
  name: string;
  value: string;
}
const Radio = (prop: chkProp) => {
  const [isChecked, setIsChecked] = useState(prop.checked);
  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={prop.name}
        id={prop.id}
        value={prop.value}
        checked={isChecked}
        title={prop.name}
        onChange={handleInputChange}
      />
      <label className="form-check-label" htmlFor={prop.id}>
        {prop.labelText}
      </label>
    </div>
  );
};

export default Radio;
