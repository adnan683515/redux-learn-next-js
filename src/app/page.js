"use client"

import CounterCompo from "./components/CounterCompo";
import { decrement, increment } from "./components/countersRedux/counterSlice";
import Resturent from "./components/Resturent";
import TotalCount from "./components/TotalCount";
import { useDispatch, useSelector } from "react-redux";



export default function Home() {

  
  const counter = useSelector((singleReducer)=> singleReducer.counters )  //use selector ar maddome amra oi single counter reducer ta k niye nilam


  const disPatch =  useDispatch() //dispatch ar maddome amra amra counterslice theke fuction gula k niye akta action trigger korbo

  const totalAmmount = counter.reduce((sum,currentValue)=> sum + currentValue?.value,0)


  const handleIncrement = (id) => {

    disPatch(increment(id))  // counter slice ar increment action k trigger korlam and action ar modde id pathalam ..seta counter slice ar modde payload hisabe jabo

  }


  const handleDecrement = (id) => {

      disPatch(decrement(id))  // counter slice ar decrement action k trigger korlam and action ar modde id pathalam ..seta counter slice ar modde payload hisabe jabo


  }


  return (
    <div className=" gap-4  min-h-[40vh]">

      <div className="flex flex-col gap-6">
        {
          counter.map((item) => {
            return <CounterCompo handleIncrement={handleIncrement} handleDecrement={handleDecrement} item={item} key={item.id}></CounterCompo>
          })
        }
      </div>


      <div>

        <TotalCount totalCount={totalAmmount}></TotalCount>
      </div>


      <Resturent></Resturent>


    </div>
  );
}
