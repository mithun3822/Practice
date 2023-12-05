import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2 className="mt-5">{heading}</h2>
      {items.length === 0 && (
        <p className="h6 text-danger">{"No record found"}</p>
      )}
      <ul className="list-group">
        {items.map((Item, index) => (
          <li
            key={Item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {Item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
