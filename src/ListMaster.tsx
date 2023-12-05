import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Switch from "./components/Switch";
import Radio from "./components/Radio";
import NoItemsFound from "./components/NoItemsFound";
import { useState } from "react";

function ListMaster() {
  const LMItems = ["Nationality", "State", "Country"];

  const [selectedField, setSelectedField] = useState<string>(LMItems[0]);
  const [selectedAction, setSelectedAction] = useState<number>(0);
  const [LMDItems, setLMDItems] = useState([
    "Indian",
    "Cypriot",
    "German",
    "Pakistani",
  ]);

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedField(selectedValue);
    if (selectedValue === LMItems[0])
      setLMDItems(["Inidan", "Cypriot", "German", "Pakistani"]);
    else if (selectedValue === LMItems[1])
      setLMDItems(["Kerala", "Karnataka", "Rajasthan", "Tamil Nadu"]);
    else setLMDItems(["India", "Cyprus", "Germany", "Pakistan"]);
  };

  const handleEditButtonClick = (index: number) => {
    setSelectedAction(index === selectedAction ? -1 : index);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12 h5 text-light bg-primary text-center">
          <label className="text-light">List Master</label>
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          {
            <Dropdown
              items={LMItems}
              heading="Field Name"
              value={selectedField}
              onChange={handleDropdownChange}
            />
          }
        </div>
      </div>
      <div className="row form-group">
        <div className="col-md-12">
          <table className="table caption-top">
            <caption>List of {selectedField}</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Record Status</th>
                <th scope="col">Default</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {LMDItems.length === 0 && <NoItemsFound />}
              {LMDItems.map((list, index) => (
                <tr key={index}>
                  <th scope="row">{(index += 1)}</th>
                  <td>
                    <label id={`lblListName_${index}`}>{list}</label>
                    <input
                      type="text"
                      id={`txtListName_${index}`}
                      className="form-control form-control-sm d-none"
                      value={list}
                    ></input>
                  </td>
                  <td>
                    <Switch
                      id={`RActive_${index}`}
                      labelText=""
                      checked={true}
                      value={index.toString()}
                      title="Record Status"
                    />
                  </td>
                  <td>
                    <Radio
                      id={`Default_${index}`}
                      labelText=""
                      checked={false}
                      name="Default"
                      value={index.toString()}
                    />
                  </td>
                  <td>
                    <Button
                      color={selectedAction === index ? "success" : "primary"}
                      onClick={() => handleEditButtonClick(index)}
                    >
                      {selectedAction === index ? "Save" : "Edit"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListMaster;
