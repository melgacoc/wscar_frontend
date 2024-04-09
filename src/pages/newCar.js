import React from "react";
import Header from "../components/header";
import NewCarForm from "../components/newCar";

function NewCar() {
    return (
    <div>
      <Header page={'newCar'}/>
      <NewCarForm />
    </div>
  );
}

export default NewCar;