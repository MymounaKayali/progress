import React, { useEffect, useState } from 'react';
import Circle from '../Circle/Circle';
import './App.css';
import Styles from '../Circle/Circle.module.css';

function App()
{
  const [circle] = useState(4)
  const[active , setActive] = useState(0)
  const[width , setWidth] = useState(0)

  useEffect(() => 
  {
    setWidth(100/(circle-1)*active)
  },[circle , active])
  
  const arr = []
  for (let i = 0; i < circle; i++) 
  { 
    arr.push(<Circle classname={i<=active ? Styles.circleactive:Styles.circle} key={i}>{i}</Circle>)
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.progressbars}>
        <div className={Styles.progress} style ={{width:width+"%"}}></div>
          {arr}
        </div>
        <div className={Styles.button}>
          <button className={Styles.btn}  disabled={active>0?false:true} onClick={() => {active<=0 ? setActive(0) : setActive(active-1)}}>Previous</button>
          <button className={Styles.btn} disabled={active>=circle-1?true:false} onClick={() => {active>=circle ? setActive(circle) : setActive(active+1)}}>Next</button>
        </div>
      </div>
    </div>


  );
}

export default App;
