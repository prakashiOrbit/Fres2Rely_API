import React from "react";
//import RegForm from "./Form";
import RegForm from "./Form.jsx";
import farmerFields from "./farmerFields.js";
//import farmerFields from "./farmerFields.json";

class Farmer extends React.Component {
  //   fields = "./Service/po.json";
  //   farmerFields = "./Service/farmer.json";
  fields = "./Service/farmer.json";
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RegForm
        aev={"add"}
        fields={farmerFields}
        inputfields={<farmerFields />}
      />

      //return <div>{JSON.stringify(farmerFields)}</div>;
    );
  }
}

export default Farmer;
