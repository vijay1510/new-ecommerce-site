import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Product from "./Product";
import { getName } from "../redux/Action";

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    first: state.first,
    filtered: state.filtered,
    single: state.single,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getName }, dispatch);
};

class AllProducts extends Component {
  render() {
    return (
      <>
        {this.props.single === null && <h1>Loading</h1>}

        {this.props.single && (
          <div className='allproducts'>
            {this.props.single.map((all) => (
              <Product key={all.id} {...all} />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
