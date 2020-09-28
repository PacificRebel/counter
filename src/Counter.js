import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState (0)

  const counterPlusOne = () => setCounter(counter + 1)

  return (
    <div>
    {counter}
    <button onClick={counterPlusOne}>Click to add 1</button>
    </div>
  )
}

export default Counter
