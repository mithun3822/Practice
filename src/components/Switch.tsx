import React, { useState } from "react";

interface SwitchProp {
  id: string;
  labelText: string;
  checked: boolean;
  value: string;
  title: string;
}

const Switch = (prop: SwitchProp) => {
  const [isChecked, setIsChecked] = useState(prop.checked);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={prop.id}
        checked={isChecked}
        value={prop.value}
        title={prop.title}
        onChange={handleInputChange}
      />
      <label className="form-check-label" htmlFor={prop.id}>
        {prop.labelText}
      </label>
    </div>
  );
};

export default Switch;
