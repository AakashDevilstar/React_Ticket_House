import TrainContext from "./TrainContext";
import { useReducer } from "react";

const defaultState = {
  totalTickets: 0,
  totalPrize: 0,
  totalItem: [],
};

const trainReducer = (state, action) => {
  if (action.identifier === "addTrain") {
    let addedTickets = 1;
    if (action.count !== 1) {
      addedTickets = action.count;
    }
    return {
      totalTickets: state.totalTickets + addedTickets,
      totalPrize: state.totalPrize + action.price * addedTickets,
      totalItem: state.totalItem,
    };
  } else if (action.identifier === "addOrder") {
    return {
      totalTickets: state.totalTickets,
      totalPrize: state.totalPrize,
      totalItem: [...state.totalItem, action.arr],
    };
  } else if (action.identifier === "addone") {
    // console.log(action.id);
    let obj = state.totalItem.find((obj) => {
      if (obj.id === action.id) {
        // eslint-disable-next-line no-unused-expressions
        // let oldCount=obj.count+1;
        // let newprice=obj.countPrice+obj.price;
        // let myarr=state.totalItem;
        // let change=myarr.splice(1,2,oldCount,newprice);
        // console.log(myarr);
        // return change;
        return obj;
      }
    });
    let newcount = Number(obj.count) + 1;
    obj.count = newcount;
    let newprice = Number(obj.countPrice) + Number(obj.price);
    obj.countPrice = newprice;
    // console.log(newcount,newprice);
    let myarr = [...state.totalItem];
    myarr.splice(Number(obj.id) - 1, 1, obj);
    console.log(myarr);
    return {
      totalTickets: state.totalTickets+1,
      totalPrize: state.totalPrize+Number(obj.price),
      totalItem: myarr,
    };
  } 

  else if(action.identifier ==="minusone"){
    let obj = state.totalItem.find((obj) => {
        if (obj.id === action.id) {
          // eslint-disable-next-line no-unused-expressions
          // let oldCount=obj.count+1;
          // let newprice=obj.countPrice+obj.price;
          // let myarr=state.totalItem;
          // let change=myarr.splice(1,2,oldCount,newprice);
          // console.log(myarr);
          // return change;
          return obj;
        }
      });
      let newcount = Number(obj.count) - 1;
      obj.count = newcount;
      let newprice = Number(obj.countPrice) - Number(obj.price);
      obj.countPrice = newprice;
      // console.log(newcount,newprice);
      let myarr = [...state.totalItem];
      myarr.splice(Number(obj.id) - 1, 1, obj);
      console.log(myarr);
      return {
        totalTickets: state.totalTickets-1,
        totalPrize: state.totalPrize-Number(obj.price),
        totalItem: myarr,
      };
  }
  
  else {
    return {
      totalTickets: 0,
      totalPrize: 0,
      totalItem: [],
    };
  }
};

export default function TrainContextprovider(props) {
  const [trainState, dispatchCartAction] = useReducer(
    trainReducer,
    defaultState
  );

  const addTrain = (count, price) => {
    dispatchCartAction({ identifier: "addTrain", count: count, price: price });
  };

  const addOrder = (items) => {
    // console.log(items);
    dispatchCartAction({ identifier: "addOrder", arr: items });
  };

  const deleteOrder = () => {
    dispatchCartAction({ identifier: "deleteCart" });
  };

  const increment = (id) => {
    dispatchCartAction({ identifier: "addone", id: id });
  };

  const decrement=(id)=>{
      dispatchCartAction({identifier:"minusone",id:id});
  };

  const values = {
    totalTickets: trainState.totalTickets,
    totalPrize: trainState.totalPrize,
    addTrain: addTrain,
    totalItem: trainState.totalItem,
    addOrder: addOrder,
    increment: increment,
    decrement: decrement,
    deleteOrder: deleteOrder,
  };

  return (
    <TrainContext.Provider value={values}>
      {props.children}
    </TrainContext.Provider>
  );
}
