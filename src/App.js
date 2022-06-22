import React,{useState} from "react";
import Header from "./Component/Header/Header";
import Addwork from "../src/Component/Work/Addwork"
import TrainContextprovider from "./Component/Context/TrainContextprovider";
// import TrainContext from "./Component/Context/TrainContext";
import Modal from "./Component/Modal/Modal";

const data=[
  {
    id: "1",
    city: "Delhi",
    dest: "Delhi To Goa",
    Prc: "200",
  },
  {
    id: "2",
    city: "Kerla",
    dest: "Kerla To Mumbai",  
    Prc: "400",
  },
  {
    id: "3",
    city: "Kolkata",
    dest: "Kolkata To Chennai",
    Prc: "500",
  },
  {
    id: "4",
    city: "Uttrakhand",
    dest: "Uttrakhand To delhi",
    Prc: "800",
  },
  {
    id: "5",
    city: "Mumbai",
    dest: "Mumbai To J&K",
    Prc: "200",
  },
  {
    id: "6",
    city: "Punjab",
    dest: "Punjab To Assam",
    Prc: "700",
  },
];

function App(){

  // const arr=useContext(TrainContext);

  const [showCart,setshowCart]=useState(false);

  const setcarthandler=(e)=>{
    setshowCart(e);
  }

  const secondcarthandler=(e)=>{
    setshowCart(e);
  }

  return (
    <>
      <TrainContextprovider>
        <Header oncart={setcarthandler}/>
        {/* {
          arr.totalItem.map((e) => {
            {showCart && <Modal onbut={secondcarthandler} detail={e.name}/>}
          })
        } */}
        {showCart && <Modal onbut={secondcarthandler} />}
        <div className="workBox">
          {data.map((val)=>{
            return <Addwork city={val.city} dest={val.dest} prc={val.Prc} id={val.id}/>
          })}
        </div>
      </TrainContextprovider>
    </>
  );

  // return (
  //   <>
  //     <Modal/>
  //   </>
  // );
}

export default App;