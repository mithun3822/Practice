import React from "react";
import NoItemsFound from "./NoItemsFound";
interface DropdownProps {
  items: string[];
  heading: string;
  value: string | undefined;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  heading,
  value,
  onChange,
}) => {
  return (
    <>
      {items.length === 0 && <NoItemsFound />}
      <div className="row">
        <div className="col-md-1">
          <label className="h6">{heading}</label>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            title={heading}
          >
            {items.map((item: string, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
