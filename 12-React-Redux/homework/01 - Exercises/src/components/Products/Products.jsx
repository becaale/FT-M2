import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from "../Card/Card";
import { getStoreName } from "../../redux/actions/actions";

export function Products({ list, storeName }) {
  React.useEffect(() => {
    getStoreName();
  }, []);

  return (
    <div className="productsBg">
      <h1 className="productsTl">{storeName}</h1>

      <div className="productsList">
        {list.map((element) => {
          <Card
            name={element.name}
            price={element.price}
            id={element.id}
            key={element.id}
          />;
        })}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return { list: state.list, storeName: state.storeName };
}

export function mapDispatchToProps(dispatch) {
  return { getStoreName: () => dispatch(getStoreName()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
