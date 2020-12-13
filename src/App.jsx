import './App.css';
import React ,{ Component, useState, useMemo,memo, useRef, useCallback} from 'react';

const Counter = memo(function Counter(props){
  console.log('Counter render')
  return (
    <h1>
      {props.count}
    </h1>
  )
})
function App2 () {
  const [count, setCount] = useState(1);
  const [clickCount, setclickCount] = useState(1)
  const CounterRef = useRef();
  const double = useMemo(()=>{
    return count * 2;
  }, [count])

  const onClick = useCallback(()=>{
    console.log('click');
    setclickCount((clickCount)=>
      clickCount + 1
    )
    console.log(CounterRef.current);
  },[CounterRef])
      return (
        <div>
      <button
      type="button" 
      onClick={()=>setCount(count * 2)}>
        点击 ({count} {double})
      </button>
        <Counter ref={CounterRef}
        onClick={onClick}
        count={count}/>
      </div>
    )
}


export default App2;
