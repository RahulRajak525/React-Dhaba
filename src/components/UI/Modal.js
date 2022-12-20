import React from "react";
import classes from "./Modal.module.css";
import { Fragment } from "react";
import * as ReactDOM from "react-dom";
// var ReactDOM = require("react-dom");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlays = (props) => {
  return (
    <div>
      <div>{props.children} </div>
    </div>
  );
};
const portalElement = document.getElementById("root");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children} </ModalOverlays>,
        portalElement
      )}
    </Fragment>
  );
};
// ReactDOM.render(<Modal />, document.getElementById("root"));
export default Modal;
