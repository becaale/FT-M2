import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.animals = props.animals;
  }

  render() {
    return (
      <div>
        {this.animals.map((animal, key) => {
          return (
            <div key={key}>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width="300px"></img>
              <span>{animal.specie}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
