import React, { useState, useContext } from "react";
import train from "../Image/train.png";
import style from "./Addwork.module.css";
import TrainContext from "../Context/TrainContext";

const Addwork = (props) => {

  const values = useContext(TrainContext);

  let count1=0;

  const [count, setCount] = useState(1);
  // const[count1,setcount1]=useState(0);

  function inputChangeHandler(e) {
    setCount(e.target.value);
  }

  const clickButtonHandler = (e) => {
    e.preventDefault();
    values.addTrain(Number(count), Number(props.prc));

    values.addOrder({ name: props.city,count: count,countPrice: props.prc * count,id: props.id,price: props.prc,postiton: count1+=1});

    setCount(1);
  };

  return (
    <div className={style.all}>
      <div className={style.main}>
        <h1>{props.city}</h1>
        <img src={train} alt="train" />
        <h3 className={style.det}>{props.dest}</h3>
        <p>${props.prc}</p>
        <h3>No. of Ticket</h3>

        <input
          value={count}
          onChange={inputChangeHandler}
          type="number"
          name="name"
        />

        <hr></hr>

        <button onClick={clickButtonHandler}>Add To Cart</button>
      </div>
      <div className={style.main}>
        <h1>{props.city}</h1>
        <img src={train} alt="train" />
        <h3 className={style.det}>{props.dest}</h3>
        <p>${props.prc}</p>
        <h3>No. of Ticket</h3>

        <input
          value={count}
          onChange={inputChangeHandler}
          type="number"
          name="name"
        />

        <hr></hr>

        <button onClick={clickButtonHandler}>Add To Cart</button>
      </div>
      <div className={style.main}>
        <h1>{props.city}</h1>
        <img src={train} alt="train" />
        <h3 className={style.det}>{props.dest}</h3>
        <p>${props.prc}</p>
        <h3>No. of Ticket</h3>

        <input
          value={count}
          onChange={inputChangeHandler}
          type="number"
          name="name"
        />

        <hr></hr>

        <button onClick={clickButtonHandler}>Add To Cart</button>
      </div>
      <div className={style.main}>
        <h1>{props.city}</h1>
        <img src={train} alt="train" />
        <h3 className={style.det}>{props.dest}</h3>
        <p>${props.prc}</p>
        <h3>No. of Ticket</h3>

        <input
          value={count}
          onChange={inputChangeHandler}
          type="number"
          name="name"
        />

        <hr></hr>

        <button onClick={clickButtonHandler}>Add To Cart</button>
      </div>
    </div>
    
  );
};

export default Addwork;
