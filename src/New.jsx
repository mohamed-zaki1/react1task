import { useState } from "react";

function New() {
const [count, setCount] = useState(1);

    // let step=1;
    function stepUp() {
        // alert('hellllllllllo')
        setCount(count + 1);
    }
    function stepDown() {
        // alert('hellllllllllo')
        setCount(count - 1);
    }
  return (
    <div>
      <div className="steps">
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="message">this is my message</div>
        <p>{count}</p>

        <div className="buttons">
            <button onClick={stepDown}>prvious</button>
            <button onClick={stepUp}>next</button>

        </div>
      </div>
    </div>
  );
}

export default New;
