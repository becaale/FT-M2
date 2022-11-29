import React from "react";

export default class Botones extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        {console.log(props)}
        <button onClick={() => alert(props.alerts.m1)}>Módulo 1</button>
        <button onClick={() => alert(props.alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}

/* export default function Botones(props) {
    // el código de tu componente acá
    return (
        <>
        <div>
          <button onClick={() => alert(props.m1)}>Módulo 1</button>
          <button onClick={() => alert(props.m2)}>Módulo 2</button>
        </div>
      </>
    );
  } */
