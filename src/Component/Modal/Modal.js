import React, { useContext } from "react";
import style from "./Modal.module.css";
import TrainContext from "../Context/TrainContext";
import ModalDetails from "./ModalDetails";

function Modal(props) {
  const val = useContext(TrainContext);

  const orderhandler=()=>{
      props.onbut(false);
      val.deleteOrder();
    }

  return (
    <>
      <div className={style.upper}>
        <div className={style.main}>
          <p>Cart</p>
          <hr></hr>
          <div className={style.two}>
 
            {val.totalItem.map((obj) => <ModalDetails city={obj.name} count={obj.count} price={obj.countPrice} id={obj.id}/>)}
          </div>
          <hr></hr>
          <div className={style.foot}>
            <button onClick={orderhandler}>Order</button>
            <h5> Amount: ${val.totalPrize} </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
