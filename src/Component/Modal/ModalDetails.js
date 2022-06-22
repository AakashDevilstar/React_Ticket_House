import { useContext } from "react";
import style from "./ModalDetails.module.css"
import TrainContext from "../Context/TrainContext";
const ModalDetails = (props) => {
    // return <div>{props.city}</div>;
    
    const values = useContext(TrainContext);
    
    const incrementHandler=()=>{
        values.increment(props.id);
    }

    const decrementHandler=()=>{
        values.decrement(props.id);
    }

    return (
        <>
         <div className={style.cart}>
            <div>
              {props.city}
              <button onClick={incrementHandler}>+</button>
              <span>{props.count}</span>
              <button onClick={decrementHandler}>-</button>
              <span>${props.price}</span>
              <hr></hr>
           </div>
         </div>
        </>
    )
};
  
  export default ModalDetails;
  