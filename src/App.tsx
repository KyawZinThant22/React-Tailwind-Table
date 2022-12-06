import { useState } from "react";
import SwitchButton from "./components/Element/SwitchButton";
export interface ISelectedData {
  data: string;
  label: string;
}

function App() {
  const [selectedData, setSelectedData] = useState<ISelectedData>({
    data: "user",
    label: "",
  });

  console.log(selectedData);

  const Data = [
    { label: "User", data: "user" },
    { label: "Merchant", data: "merchant" },
    { label: "Both", data: "both" },
  ];

  const handleSelect = (value: string) => {
    Data.map((item) => {
      if (value === item.data) {
        setSelectedData(item);
      }
    });
  };

  return (
    <div className="container mx-auto mt-12 w-48">
      <SwitchButton
        value={Data}
        onChange={handleSelect}
        selected={selectedData}
      />
    </div>
  );
}

export default App;
